import { Viewport } from 'pixi-viewport';
import { MultipleFormat } from '../../../ui/menus/TopBar/SubMenus/useGetSelection';
import { Sheet } from '../../../grid/sheet/Sheet';
import { zoomIn, zoomOut, zoomTo100, zoomToFit } from '../../helpers/zoom';
import { EditorInteractionState } from '../../../atoms/editorInteractionStateAtom';
import { Pointer } from '../pointer/Pointer';

export function keyboardViewport(options: {
  event: KeyboardEvent;
  sheet: Sheet;
  viewport?: Viewport;
  editorInteractionState: EditorInteractionState;
  setEditorInteractionState: React.Dispatch<React.SetStateAction<EditorInteractionState>>;
  clearAllFormatting: Function;
  changeBold: Function;
  changeItalic: Function;
  format: MultipleFormat;
  pointer: Pointer;
  presentationMode: boolean;
  setPresentationMode: Function;
}): boolean {
  const {
    changeBold,
    changeItalic,
    clearAllFormatting,
    event,
    format,
    sheet,
    viewport,
    editorInteractionState,
    setEditorInteractionState,
    presentationMode,
    setPresentationMode,
  } = options;

  if (!viewport || event.altKey) return false;

  if ((event.metaKey || event.ctrlKey) && (event.code === 'KeyP' || event.code === 'KeyK' || event.code === 'Slash')) {
    setEditorInteractionState({
      ...editorInteractionState,
      showCellTypeMenu: false,
      showGoToMenu: false,
      showCommandPalette: !editorInteractionState.showCommandPalette,
    });
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'Backslash') {
    clearAllFormatting();
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'Period') {
    setPresentationMode(!presentationMode);
    return true;
  }

  if (event.code === 'Escape') {
    if (presentationMode) setPresentationMode(false);
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'KeyB') {
    changeBold(!(format.bold === true));
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'KeyI') {
    changeItalic(!(format.italic === true));
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && (event.code === 'KeyG' || event.code === 'KeyJ')) {
    setEditorInteractionState({
      ...editorInteractionState,
      showCellTypeMenu: false,
      showCommandPalette: false,
      showGoToMenu: !editorInteractionState.showGoToMenu,
    });
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'Equal') {
    zoomIn(viewport);
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'Minus') {
    zoomOut(viewport);
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'Digit9') {
    zoomToFit(sheet, viewport);
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'Digit0') {
    zoomTo100(viewport);
    return true;
  }

  if ((event.metaKey || event.ctrlKey) && event.code === 'KeyS') {
    // don't do anything on Command+S
    return true;
  }

  if (event.code === 'Escape') {
    // if (pointer.handleEscape()) {
    //   return true;
    // }
  }

  return false;
}
