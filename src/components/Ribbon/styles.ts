import styled, { css, DefaultTheme } from 'styled-components';

import { RibbonColors, RibbonProps, RibbonSizes } from '.'

const wrapperModifiers = {
  bgcolor: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,
  ribbonSize: (theme: DefaultTheme, size: RibbonSizes) => css`
    height: ${theme.spacings[size]};
    font-size: ${theme.font.sizes[size]};
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
      ${!!color && wrapperModifiers.bgcolor(theme, color)}
      ${!!size && wrapperModifiers.ribbonSize(theme, size)}
  `}
`;
