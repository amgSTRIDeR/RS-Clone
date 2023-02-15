export interface IButtonProps {
  value?: string;

  className?: string[];

  onClick?: VoidFunction;
}

export interface IButtonTextWithIconProps extends IButtonProps {
  svg: string;
}