import styled from 'styled-components';
import theme from 'styles/theme';
import * as ButtonStyles from '../Button/styles';
export const Wrapper = styled.main`
    max-width: 35rem;
`;

export const InputWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1.2rem;

    ${ButtonStyles.Container} {
        color: ${theme.colors.black};
    }
`;