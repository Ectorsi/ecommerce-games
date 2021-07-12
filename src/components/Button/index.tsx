import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  AnchorHTMLAttributes<HTMLAnchorElement> |
  ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon, ...props
}: ButtonProps) => (
  <S.Container
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  > {icon} {!!children && <span>{children}</span>}</S.Container>
);

export default Button;
