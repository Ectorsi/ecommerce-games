import styled, { css } from 'styled-components';

import { RadioProps } from '.'



export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    ${({ theme }) => css`
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        appearance: none;
        width: 1.8rem;
        height: 1.8rem;
        border: 0.2rem solid ${theme.colors.darkGray};
        border-radius: 50%;
        transition: background border ${theme.transition.fast};
        position: relative;
        outline: none;

        &:before {
        content: '';
        width: 1rem;
        height: 1rem;
        background: ${theme.colors.primary};
        border-radius:50%;
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        opacity: 0;
        transition: ${theme.transition.fast};
        }

        &:focus {
        box-shadow: 0 0 0.5rem ${theme.colors.primary};
        }

        &:checked {
        border-color: ${theme.colors.primary};

        &:before {
            opacity: 1;
        }
        }
    `}
`;

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
    ${({ theme, labelColor }) => css`
        cursor: pointer;
        padding-left: ${theme.spacings.xxsmall};
        color: ${theme.colors[labelColor!]};
        line-height: 1.8rem;
    `}
`;
