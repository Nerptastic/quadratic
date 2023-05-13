import { Container } from 'pixi.js';
import { Sheet } from '../../grid/sheet/Sheet';
import { intersects } from '../helpers/intersects';
import { Quadrant } from './Quadrant';
import { PixiApp } from '../pixiApp/PixiApp';
import { debugShowCacheInfo } from '../../debugFlags';
import { QUADRANT_COLUMNS, QUADRANT_ROWS } from './quadrantConstants';
import { Viewport } from 'pixi-viewport';
import { QuadrantChanged } from './Quadrants';
import { Coordinate } from '../types/size';

// quadrants for one Sheet
export class QuadrantsSheet extends Container {
  private app: PixiApp;
  private quadrants: Map<string, Quadrant>;
  sheet: Sheet;
  complete: boolean;

  constructor(app: PixiApp, sheet: Sheet) {
    super();
    this.app = app;
    this.sheet = sheet;
    this.quadrants = new Map();
    this.complete = false;
    this.build();
  }

  getQuadrantCoordinate(x: number, y: number): Coordinate {
    return {
      x: Math.floor(x / QUADRANT_COLUMNS),
      y: Math.floor(y / QUADRANT_ROWS),
    };
  }

  build(): void {
    this.complete = true;
    this.removeChildren();
    this.quadrants.clear();
    const { grid, borders, render_dependency, array_dependency } = this.sheet;
    const gridBounds = grid.getGridBounds(false);
    const borderBounds = borders.getGridBounds();
    const renderDependencyBounds = render_dependency.getGridBounds();
    const arrayDependencyBounds = array_dependency.getGridBounds();
    const bounds = intersects.rectangleUnion(gridBounds, borderBounds, renderDependencyBounds, arrayDependencyBounds);

    if (!bounds) return;

    // iterate through visible grid bounds and prepare quadrants
    const yStart = Math.floor(bounds.top / QUADRANT_ROWS);
    const yEnd = Math.floor(bounds.bottom / QUADRANT_ROWS);
    const xStart = Math.floor(bounds.left / QUADRANT_COLUMNS);
    const xEnd = Math.floor(bounds.right / QUADRANT_COLUMNS);
    for (let y = yStart; y <= yEnd; y++) {
      for (let x = xStart; x <= xEnd; x++) {
        if (this.sheet.hasQuadrant(x, y)) {
          const quadrant = this.addChild(new Quadrant(this.sheet, x, y));
          this.quadrants.set(`${x},${y}`, quadrant);
          this.complete = false;
        }
      }
    }
    if (debugShowCacheInfo) {
      console.log(
        `[Quadrants] Added ${
          Math.ceil(bounds.width / QUADRANT_COLUMNS) * Math.ceil(bounds.height / QUADRANT_ROWS)
        } quadrants for sheet ${this.sheet.id} to queue.`
      );
    }
  }

  update(viewport: Viewport, timeStart: number): boolean | 'not dirty' {
    const firstDirty = this.children.find((child) => (child as Quadrant).dirty) as Quadrant;
    if (firstDirty) {
      if (debugShowCacheInfo) {
        const dirtyCount = this.children.reduce((count, child) => count + ((child as Quadrant).dirty ? 1 : 0), 0) - 1;
        firstDirty.update(this.app, timeStart, `${this.children.length - dirtyCount}/${this.children.length}`);
        if (dirtyCount === 0 && !this.complete) {
          this.complete = true;
          this.debugCacheStats();
          this.sheet.gridOffsets.debugCache();
        }
      } else {
        firstDirty.update(this.app);
        this.complete = false;
      }
      return this.visible && intersects.rectangleRectangle(viewport.getVisibleBounds(), firstDirty.visibleRectangle);
    }
    return 'not dirty';
  }

  getQuadrant(row: number, column: number, create: boolean): Quadrant | undefined {
    let quadrant = this.quadrants.get(`${row},${column}`);
    if (quadrant) return quadrant;
    if (!create) return;
    quadrant = this.addChild(new Quadrant(this.sheet, row, column));
    this.quadrants.set(`${row},${column}`, quadrant);
    this.complete = false;
    return quadrant;
  }

  quadrantChanged(options: QuadrantChanged): void {
    const bounds = this.sheet.grid.getGridBounds(false);
    if (!bounds) return;

    if (options.row !== undefined) {
      for (let x = bounds.left; x <= bounds.right; x += QUADRANT_COLUMNS) {
        const { x: quadrantX, y: quadrantY } = this.getQuadrantCoordinate(x, options.row);
        const quadrant = this.getQuadrant(quadrantX, quadrantY, false);
        if (quadrant) quadrant.dirty = true;
        const dependents = this.sheet.render_dependency.getDependents({ x, y: options.row });
        dependents?.forEach((dependent) => {
          const quadrant = this.getQuadrant(dependent.x, dependent.y, false);
          if (quadrant) quadrant.dirty = true;
        });
      }

      // reposition quadrants below the row
      for (let y = options.row + 1; y <= bounds.bottom; y += QUADRANT_ROWS) {
        for (let x = bounds.left; x <= bounds.right; x += QUADRANT_COLUMNS) {
          const { x: quadrantX, y: quadrantY } = this.getQuadrantCoordinate(x, y);
          const quadrant = this.getQuadrant(quadrantX, quadrantY, false);
          quadrant?.reposition();
        }
      }
    }
    if (options.column !== undefined) {
      for (let y = bounds.top; y <= bounds.bottom; y += QUADRANT_ROWS) {
        const { x: quadrantX, y: quadrantY } = this.getQuadrantCoordinate(options.column, y);
        const quadrant = this.getQuadrant(quadrantX, quadrantY, false);
        if (quadrant) quadrant.dirty = true;
      }

      // reposition quadrants to the right of the column
      for (let y = bounds.top; y <= bounds.bottom; y += QUADRANT_ROWS) {
        for (let x = options.column + 1; x <= bounds.right; x += QUADRANT_COLUMNS) {
          const { x: quadrantX, y: quadrantY } = this.getQuadrantCoordinate(x, y);
          const quadrant = this.getQuadrant(quadrantX, quadrantY, false);
          quadrant?.reposition(true);
        }
      }
    }

    // set quadrant of list of cells dirty
    if (options.cells) {
      const quadrants = new Set<string>();
      options.cells.forEach((coordinate) => {
        const { x: quadrantX, y: quadrantY } = this.getQuadrantCoordinate(coordinate.x, coordinate.y);
        const key = `${quadrantX},${quadrantY}`;
        const quadrant = this.getQuadrant(quadrantX, quadrantY, true);
        if (quadrant) quadrant.dirty = true;
        quadrants.add(key);
      });
    }

    // set range of cells dirty
    if (options.range) {
      const { start, end } = options.range;
      const quadrants = new Set<string>();
      for (let y = start.y; y <= end.y; y++) {
        for (let x = start.x; x <= end.x; x++) {
          const { x: quadrantX, y: quadrantY } = this.getQuadrantCoordinate(x, y);
          const key = `${quadrantX},${quadrantY}`;
          if (!quadrants.has(key)) {
            const quadrant = this.getQuadrant(quadrantX, quadrantY, false);
            if (quadrant) quadrant.dirty = true;
            quadrants.add(key);
          }
        }
      }
    }
  }

  private debugCacheStats(): void {
    const textures = this.children.reduce((count, child) => count + (child as Quadrant).debugTextureCount(), 0);
    console.log(`[Quadrants] Rendered ${textures} quadrant textures.`);
  }
}