import styled, { css } from 'styled-components';

import * as HeadingStyles from 'components/Heading/styles';
import * as HighlightStyles from 'components/Highlight/styles';
import * as GameCardSliderStyles from 'components/GameCardSlider/styles';
import media from 'styled-media-query';

export const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);

  `}
`;

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2) ;

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`;
export const SectionNews = styled.div`

`;
export const SectionMostPopular = styled.div`

`;
export const SectionUpcoming = styled.div`

`;
export const SectionFreeGames = styled.div`

`;
export const SectionFooter = styled.div`

`;
