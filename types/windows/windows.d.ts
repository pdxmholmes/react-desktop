import { Component, ReactNode } from 'react';
import {
  AlignmentProps,
  DimensionProps,
  HiddenProps,
  MarginProps,
  PaddingProps
} from '../styles';
import {
  ColorProps,
  ThemeProps
} from './styles';

declare module "react-desktop/windows" {
  interface EventHandler {
    (e?: Event): void;
  }

  type ButtonProps =
    HiddenProps &
    ColorProps &
    ThemeProps & {
      onClick?: EventHandler;
      push?: boolean;
      type?: string;
    }
  class Button extends Component<ButtonProps> { }

  type CheckboxProps =
    HiddenProps &
    ColorProps &
    ThemeProps & {
      label?: string;
      onChange?: EventHandler;
    }
  class Checkbox extends Component<CheckboxProps> { }

  type LabelProps = {
    background?: string | boolean;
    color?: string | boolean;
    height?: number | string;
    hidden?: boolean;
    horizontalAlignment?: string;
    margin?: number | string;
    padding?: number | string;
    theme?: string;
    verticalAlignment?: string;
    width?: number | string;
  }
  class Label extends Component<Label> { }

  type MasterDetailsViewProps = {
    color?: string;
    theme?: string;
  }
  class MasterDetailsView extends Component<MasterDetailsViewProps> { }

  type MasterDetailsViewItemProps = {
    color?: string;
    theme?: string;
  }
  class MasterDetailsViewItem extends Component<MasterDetailsViewItemProps> { }

  type MasterDetailsViewItemMasterProps = {
    color?: string;
    push?: boolean;
    selected?: boolean;
    theme?: string;
    width?: number | string;
  }
  class MasterDetailsViewItemMaster extends Component<MasterDetailsViewItemMasterProps> { }

  type MasterDetailsViewItemDetailsProps = {
    background?: string | boolean;
    color?: string;
    theme?: string;
  }
  class MasterDetailsViewItemDetails extends Component<MasterDetailsViewItemDetailsProps> { }

  type NavPaneProps = {
    canPaneToggle?: boolean;
    color?: string;
    defaultIsPaneExpanded?: string | boolean;
    onPaneToggle?: EventHandler;
    paneCompactedLength?: number | string;
    paneExpandedLength?: number | string;
    theme?: string;
  }
  class NavPane extends Component<NavPaneProps> { }

  type NavPaneItemProps = {
    background?: string | boolean;
    color?: string;
    horizontalAlignment?: string;
    icon?: string | ReactNode;
    margin?: number | string;
    onSelect?: EventHandler;
    padding?: number | string;
    push?: boolean;
    selected?: boolean;
    title?: string | ReactNode;
    theme?: string;
    verticalAlignment?: string;
  }
  class NavPanelItem extends Component<NavPaneItemProps> { }

  type ProgressCircleProps = {
    color?: string;
    hidden?: boolean;
    size?: number;
  }
  class ProgressCircle extends Component<ProgressCircleProps> { }

  type RadioProps = {
    color?: string;
    defaultValue?: string;
    defaultChecked?: string | boolean;
    hidden?: boolean;
    label?: string;
    name?: string;
    onChange?: EventHandler;
    theme?: string;
  }
  class Radio extends Component<RadioProps> { }

  type TextProps = {
    background?: string | boolean;
    color?: string | boolean;
    height?: number | string;
    hidden?: boolean;
    horizontalAlignment?: string;
    margin?: number | string;
    padding?: number | string;
    theme?: string;
    verticalAlignment?: string;
    width?: number | string;
  }
  class Text extends Component<TextProps> { }

  type TextInputProps = {
    background?: string | boolean;
    color?: string;
    defaultValue?: string;
    hidden?: boolean;
    label?: string;
    labelStyle?: object;
    onChange?: EventHandler;
    placeholder?: string;
    theme?: string;
    value?: string;
    width?: number | string;
    password?: boolean;
  }
  class TextInput extends Component<TextInputProps> { }

  type TitleBarProps = {
    background?: string | boolean;
    controls?: boolean;
    color?: string;
    isMaximized?: boolean;
    onCloseClick?: EventHandler;
    onMaximizeClick?: EventHandler;
    onMinimizeClick?: EventHandler;
    onRestoreDownClick?: EventHandler;
    title?: string;
    theme?: string;
  }
  class TitleBar extends Component<TitleBarProps> { }

  type ViewProps = {
    background?: string | boolean;
    color?: string;
    height?: number | string;
    hidden?: boolean;
    horizontalAlignment?: string;
    layout?: string;
    margin?: number | string;
    padding?: number | string;
    theme?: string;
    verticalAlignment?: string;
    width?: number | string;
  }
  class View extends Component<ViewProps> { }

  type WindowProps = {
    background?: string | boolean;
    chrome?: boolean;
    color?: string | boolean;
    height?: number | string;
    hidden?: boolean;
    horizontalAlignment?: string;
    padding?: number | string;
    theme?: string;
    verticalAlignment?: string;
    width?: number | string;
  }
  class Window extends Component<WindowProps> { }
}
