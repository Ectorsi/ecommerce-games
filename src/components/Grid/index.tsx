import styled, { css } from "styled-components";


export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    // técnica para trabalhar com quantidade dinamica de item em colunas com display grid
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
  `}
`;