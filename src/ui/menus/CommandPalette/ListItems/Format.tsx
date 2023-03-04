import { useFormatCells } from '../../TopBar/SubMenus/useFormatCells';
import { CommandPaletteListItem } from '../CommandPaletteListItem';
import { KeyboardSymbols } from '../../../../helpers/keyboardSymbols';
import { AbcOutlined, AttachMoney, FormatClear, Functions, Percent } from '@mui/icons-material';
import { DecimalDecrease, DecimalIncrease, Icon123 } from '../../../icons';
import { useClearAllFormatting } from '../../TopBar/SubMenus/useClearAllFormatting';

const ListItems = [
  {
    label: 'Format: Clear all',
    Component: (props: any) => {
      const { clearAllFormatting } = useClearAllFormatting(props.sheetController, props.app);
      return (
        <CommandPaletteListItem
          {...props}
          icon={<FormatClear />}
          action={() => {
            clearAllFormatting();
          }}
          shortcut="\"
          shortcutModifiers={KeyboardSymbols.Command}
        />
      );
    },
  },
  {
    label: 'Format: Style as plain text',
    Component: (props: any) => {
      const { textFormatClear } = useFormatCells(props.sheetController, props.app);
      return (
        <CommandPaletteListItem
          {...props}
          icon={<AbcOutlined />}
          action={() => {
            textFormatClear();
          }}
        />
      );
    },
  },
  {
    label: 'Format: Style as number',
    Component: (props: any) => {
      const { textFormatSetNumber } = useFormatCells(props.sheetController, props.app);
      return <CommandPaletteListItem {...props} icon={<Icon123 />} action={textFormatSetNumber} />;
    },
  },
  {
    label: 'Format: Style as currency',
    Component: (props: any) => {
      const { textFormatSetCurrency } = useFormatCells(props.sheetController, props.app);
      return <CommandPaletteListItem {...props} icon={<AttachMoney />} action={textFormatSetCurrency} />;
    },
  },
  {
    label: 'Format: Style as percentage',
    Component: (props: any) => {
      const { textFormatSetPercentage } = useFormatCells(props.sheetController, props.app);
      return <CommandPaletteListItem {...props} icon={<Percent />} action={textFormatSetPercentage} />;
    },
  },
  {
    label: 'Format: Style as scientific',
    Component: (props: any) => {
      const { textFormatSetExponential } = useFormatCells(props.sheetController, props.app);
      return <CommandPaletteListItem {...props} icon={<Functions />} action={textFormatSetExponential} />;
    },
  },
  {
    label: 'Format: Increase decimal place',
    Component: (props: any) => {
      const { textFormatIncreaseDecimalPlaces } = useFormatCells(props.sheetController, props.app);
      return <CommandPaletteListItem {...props} icon={<DecimalIncrease />} action={textFormatIncreaseDecimalPlaces} />;
    },
  },
  {
    label: 'Format: Decrease decimal place',
    Component: (props: any) => {
      const { textFormatDecreaseDecimalPlaces } = useFormatCells(props.sheetController, props.app);
      return <CommandPaletteListItem {...props} icon={<DecimalDecrease />} action={textFormatDecreaseDecimalPlaces} />;
    },
  },
];

export default ListItems;
