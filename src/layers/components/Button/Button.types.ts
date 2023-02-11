export interface IButtonProps {
  value?: string;

  className?: string[];

  onClick?: VoidFunction;
}

export interface IButtonWithIconProps extends IButtonProps {
  svg: string;
}