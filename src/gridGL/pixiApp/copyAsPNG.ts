import { Matrix, Renderer } from 'pixi.js';
import { PixiApp } from './PixiApp';

const resolution = 2;
const borderSize = 2;

const renderer = new Renderer({
  resolution,
  antialias: true,
  backgroundColor: 0xffffff,
});

/** returns a dataURL to a copy of the selected cells */
export const copyAsPNG = async (app: PixiApp): Promise<Blob | null> => {
  let column, width, row, height;
  const interaction = app.settings.interactionState;
  if (interaction.showMultiCursor) {
    const { originPosition, terminalPosition } = interaction.multiCursorPosition;
    column = originPosition.x;
    row = originPosition.y;
    width = terminalPosition.x - column + 1;
    height = terminalPosition.y - row + 1;
  } else {
    column = interaction.cursorPosition.x;
    row = interaction.cursorPosition.y;
    width = height = 1;
  }
  const rectangle = app.sheet.gridOffsets.getScreenRectangle(column, row, width, height);

  // captures bottom-right border size
  rectangle.width += borderSize * 2;
  rectangle.height += borderSize * 2;

  renderer.resize(rectangle.width * resolution, rectangle.height * resolution);
  renderer.view.width = rectangle.width * resolution;
  renderer.view.height = rectangle.height * resolution;
  app.prepareForQuadrantRendering({ gridLines: true });
  app.gridLines.draw(rectangle);
  app.cells.drawCells(rectangle, false);
  const transform = new Matrix();
  transform.translate(-rectangle.x + borderSize, -rectangle.y + borderSize);
  app.forceUpdate();
  renderer.render(app.viewportContents, { transform });
  app.cleanUpAfterQuadrantRendering();
  return new Promise((resolve) => {
    renderer.view.toBlob((blob) => resolve(blob));
  });
};