import React, { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
    AnchorHTMLAttributes<HTMLAnchorElement> |
    ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    minimal?: boolean;
    icon?: React.ReactNode;
    as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = ({
    children,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    icon,
    ...props
}, ref) => (
    <S.Container
        size={size}
        fullWidth={fullWidth}
        hasIcon={!!icon}
        minimal={minimal}
        ref={ref}
        {...props}
    >
        {icon} {!!children && <span>{children}</span>}
    </S.Container>
);

export default forwardRef(Button);
