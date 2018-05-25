import { Component, ReactNode } from 'react';
import {
  AlignmentProps,
  DimensionProps,
  FontSizeProps,
  HiddenProps,
  MarginProps,
  PaddingProps
} from './types/styles'

declare module "react-desktop/macOs" {
  interface EventHandler {
    (e?: Event): void;
  }

  type BoxProps =
    AlignmentProps &
    DimensionProps &
    HiddenProps &
    MarginProps &
    PaddingProps & {
      label?: string;
    }
  class Box extends Component<BoxProps> { }

  type ButtonProps =
    HiddenProps &
    FontSizeProps &
    PaddingProps &
    MarginProps & {
      type?: string;
      color?: string | boolean;
      onClick?: EventHandler;
      disabled?: boolean;
    }
  class Button extends Component<ButtonProps> { }

  type CheckboxProps =
    HiddenProps & {
      label?: string;
      onChange?: EventHandler;
    }
  class Checkbox extends Component<CheckboxProps> { }

  type DialogProps =
    MarginProps &
    AlignmentProps & {
      icon?: Element;
      title?: string;
      message?: string;
      children?: Element | Element[];
      buttons?: string[];
    }
  class Dialog extends Component<Dialog> { }
}
