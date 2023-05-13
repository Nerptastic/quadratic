import { updateCellAndDCells } from './updateCellAndDCells';
import { PixiApp } from '../../gridGL/pixiApp/PixiApp';
import { SheetController } from '../controller/sheetController';

interface DeleteCellsArgs {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  sheetController: SheetController;
  pyodide?: any;
  app?: PixiApp;
  create_transaction?: boolean;
}

export const DeleteCells = async (args: DeleteCellsArgs) => {
  const { x0, y0, x1, y1, sheetController, pyodide, app, create_transaction } = args;

  const cells_to_delete = sheetController.sheet.grid.getNakedCells(x0, y0, x1, y1);
  if (!cells_to_delete.length) return;

  if (create_transaction ?? true) sheetController.start_transaction();

  await updateCellAndDCells({
    starting_cells: cells_to_delete,
    sheetController,
    pyodide,
    delete_starting_cells: true,
    app,
    create_transaction: false,
  });

  if (create_transaction ?? true) sheetController.end_transaction();
};
