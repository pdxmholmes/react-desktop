export = ReactDesktopStyles;
export as namespace ReactDesktopStyles;

declare namespace ReactDesktopStyles {
  type AlignmentProps = {
    horizontalAlignment?: string;
    verticalAlignment?: string;
  }

  type DimensionProps = {
    height?: string | number;
    width?: string | number;
  }

  type FontSizeProps = {
    size?: string | number;
  }

  type HiddenProps = {
    hidden?: boolean;
  }

  type MarginProps = {
    margin?: string | number;
    marginTop?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
  }

  type PaddingProps = {
    padding?: string | number;
    paddingTop?: string | number;
    paddingLeft?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
  }

  type TextAlignProps = {
    textAlign?: string;
  }

  type WidthProps = {
    width?: string | number;
  }
}
