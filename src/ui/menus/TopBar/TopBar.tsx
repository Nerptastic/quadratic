import { Box, Typography, IconButton } from '@mui/material';
import { useRecoilState } from 'recoil';
import { editorInteractionStateAtom } from '../../../atoms/editorInteractionStateAtom';
import { QuadraticMenu } from './SubMenus/QuadraticMenu';
import { FormatMenu } from './SubMenus/FormatMenu/FormatMenu';
import { colors } from '../../../theme/colors';
import { isElectron } from '../../../utils/isElectron';
import { DataMenu } from './SubMenus/DataMenu';
import { NumberFormatMenu } from './SubMenus/NumberFormatMenu';
import { ZoomDropdown } from './ZoomDropdown';
import { electronMaximizeCurrentWindow } from '../../../helpers/electronMaximizeCurrentWindow';
import { IS_READONLY_MODE } from '../../../constants/app';
import { PixiApp } from '../../../gridGL/pixiApp/PixiApp';
import { useLocalFiles } from '../../../hooks/useLocalFiles';
import { SheetController } from '../../../grid/controller/sheetController';
import { KeyboardSymbols } from '../../../helpers/keyboardSymbols';
import { TooltipHint } from '../../components/TooltipHint';
import { ManageSearch } from '@mui/icons-material';
import { focusGrid } from '../../../helpers/focusGrid';
import { useGridSettings } from './SubMenus/useGridSettings';
import CodeOutlinesSwitch from './CodeOutlinesSwitch';

interface IProps {
  app: PixiApp;
  sheetController: SheetController;
}

export const TopBar = (props: IProps) => {
  const [editorInteractionState, setEditorInteractionState] = useRecoilState(editorInteractionStateAtom);
  const { localFilename } = useLocalFiles();
  const settings = useGridSettings();
  // const { user } = useAuth0();

  return (
    <div
      onContextMenu={(event) => {
        // Disable right-click
        event.preventDefault();
      }}
      style={{
        backgroundColor: 'rgba(255, 255, 255)',
        color: colors.darkGray,
        //@ts-expect-error
        WebkitAppRegion: 'drag', // this allows the window to be dragged in Electron
        paddingLeft: isElectron() ? '4.5rem' : '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '1rem',
        border: colors.mediumGray,
        borderWidth: '0 0 1px 0',
        borderStyle: 'solid',
      }}
      onDoubleClick={(event) => {
        // if clicked (not child clicked), maximize window. For electron.
        if (event.target === event.currentTarget) electronMaximizeCurrentWindow();
      }}
    >
      <Box
        style={{
          //@ts-expect-error
          WebkitAppRegion: 'no-drag',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <QuadraticMenu sheetController={props.sheetController} />
        {!IS_READONLY_MODE && (
          <>
            <DataMenu></DataMenu>
            <FormatMenu app={props.app} sheet_controller={props.sheetController} />
            <NumberFormatMenu app={props.app} sheet_controller={props.sheetController}></NumberFormatMenu>
          </>
        )}
      </Box>

      {IS_READONLY_MODE ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
          }}
        >
          <Typography
            variant="body2"
            fontFamily={'sans-serif'}
            color={colors.mediumGray}
            style={{ whiteSpace: 'nowrap', marginLeft: '1rem' }}
          >
            Read Only
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            visibility: { sm: 'hidden', xs: 'hidden', md: 'visible' },
          }}
        >
          <Typography variant="body2" fontFamily={'sans-serif'} color={colors.mediumGray}>
            Local &nbsp;
          </Typography>
          <Typography variant="body2" fontFamily={'sans-serif'} color={colors.darkGray}>
            / {localFilename}
          </Typography>
          {/* <KeyboardArrowDown fontSize="small" style={{ color: colors.darkGray }}></KeyboardArrowDown> */}
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '1rem',
        }}
        style={{
          //@ts-expect-error
          WebkitAppRegion: 'no-drag',
        }}
      >
        {!IS_READONLY_MODE && (
          <>
            {/* {user !== undefined && (
              <AvatarGroup>
                <Avatar
                  sx={{
                    bgcolor: colors.quadraticSecondary,
                    width: 24,
                    height: 24,
                    fontSize: '0.8rem',
                  }}
                  alt={user?.name}
                  src={user?.picture}
                >
                  {user?.name && user?.name[0]}
                </Avatar>
              </AvatarGroup>
            )} */}
            <TooltipHint title={`${settings.showCellTypeOutlines ? 'Hide' : 'Show'} code cell outlines`}>
              <CodeOutlinesSwitch
                onClick={() => {
                  settings.setShowCellTypeOutlines(!settings.showCellTypeOutlines);
                  focusGrid();
                }}
                checked={settings.showCellTypeOutlines}
              />
            </TooltipHint>
            <TooltipHint title="Command palette" shortcut={KeyboardSymbols.Command + 'P'}>
              <IconButton
                onClick={() => {
                  setEditorInteractionState({
                    ...editorInteractionState,
                    showCommandPalette: true,
                  });
                  focusGrid();
                }}
              >
                <ManageSearch />
              </IconButton>
            </TooltipHint>
            {/* <Tooltip title="Coming soon" arrow>
              <Button
                style={{
                  color: colors.darkGray,
                  borderColor: colors.darkGray,
                  paddingTop: '1px',
                  paddingBottom: '1px',
                }}
                variant="outlined"
                size="small"
              >
                Share
              </Button>
            </Tooltip> */}
          </>
        )}
        <ZoomDropdown app={props.app} />
      </Box>
    </div>
  );
};
