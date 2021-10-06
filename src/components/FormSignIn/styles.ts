import styled, { css } from 'styled-components';
import { lighten } from 'polished';


export const ForgotPassword = styled.a`
    ${({ theme }) => css`
        justify-self: end;
        color: ${theme.colors.black};
        text-decoration: none;
        font-weight: 400;
        font-size: ${theme.font.sizes.small};

        &:hover {
                color: ${lighten(0.2, theme.colors.black)};
            };
    `}
`;