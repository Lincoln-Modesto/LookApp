export interface TitleProps {
  color?:
    "primary" |
    "light" |
    "success" |
    "warning" |
    "danger" |
    "dark" |
    "gray50" |
    "muted" |
    "black";
  variant?:
    "small" |
    "normal" |
    "big";
  hasPadding?: boolean;
  align?: string;
  underline?: boolean;
  bold?: boolean;
}

export interface TextProps {
  color?:
    "primary" |
    "light" |
    "success" |
    "warning" |
    "danger" |
    "dark" |
    "gray50" |
    "muted" |
    "black";
  variant?:
    "small" |
    "normal";
  align?: string;
  underline?: boolean;
  bold?: boolean;
  spacing?: string;
  hasPadding?: boolean;
  removePaddingBottom?: boolean
}

export interface BoxProps {
  height?: string;
  fluid?: boolean;
  width?: string;
  spacing?: string;
  row?: boolean;
  hasPadding?: boolean;
  align?: string;
  justify?: string;
  radius?: string;
  border?: string;
  background?: "primary" |
  "light" |
  "success" |
  "warning" |
  "danger" |
  "dark" |
  "gray50" |
  "muted" |
  "black";
}

export interface ButtonProps {
  spacing?: string;
  background?: "primary" |
  "light" |
  "success" |
  "warning" |
  "danger" |
  "dark" |
  "gray50" |
  "muted" |
  "black";
  block?: boolean;
}

export interface ScrollViewProps {
  hasPadding?: boolean;
  height?: string;
  fluid?: boolean;
  background?: "primary" |
  "light" |
  "success" |
  "warning" |
  "danger" |
  "dark" |
  "gray50" |
  "muted" |
  "black";
}

export interface CoverProps {
  hasPadding?: boolean;
  height?: string;
  spacing?: string;
  row?: boolean;
  radius?: string;
  width?: string;
  border?: string;
  align?: string;
  justify?: string;
  circle?: boolean
  image?: string;
}

export interface ImageBackgroundProps {
  image?: string;
  source?: {
    uri: string
  }
}