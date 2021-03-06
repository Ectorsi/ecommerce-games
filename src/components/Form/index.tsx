import styled, { css } from 'styled-components';

import * as TextFieldStyles from '../TextField/styles';
import * as ButtonStyles from '../Button/styles';
import { darken, lighten } from 'polished';

export const FormWrapper = styled.main`
    ${TextFieldStyles.Wrapper} {
        ${({ theme }) => css`
            margin-bottom: ${theme.spacings.xxsmall};

            &:last-child {
                margin-bottom: 0;
            };
        `}
    };

    ${ButtonStyles.Container} {
        ${({ theme }) => css`
            margin: ${theme.spacings.small} auto 
                ${theme.spacings.xsmall};
            `}
    };
        display: grid;
        grid-template-rows: 1fr;
`;
export const FormLink = styled.div`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        font-weight: 500;
        justify-self: center;

        a {
            color: ${theme.colors.secondary};
            text-decoration: none;
            border-bottom: 0.1rem solid ${theme.colors.secondary};
            transition: color, border, ${theme.transition.fast};

            &:hover {
                color: ${darken(0.1, theme.colors.secondary)};
                border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
            };
        }
    `}

`;
