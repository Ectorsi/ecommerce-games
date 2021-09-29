import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';

type AuthProps = {
    title: string;
    children: React.ReactNode;
}

const Auth = ({ title, children }: AuthProps) => (
    <S.Wrapper>
        <S.BannerBlock>
            <S.BannerContent>
                <Logo />
                <Heading>
                    All your favorite games
                    in one place
                </Heading>
                <S.Subtitle>
                    <strong>WON</strong> is the best and most complete gaming platform.
                </S.Subtitle>
                <S.Footer>
                    Won Games 2020 © Todos os Direitos Reservados
                </S.Footer>
            </S.BannerContent>
        </S.BannerBlock>

        <S.Content>
            <Logo color="black" size="large" />
            <Heading lineLeft lineColor="secondary" color="black" >
                {title}
            </Heading>
            {children}
        </S.Content>
    </S.Wrapper>
);

export default Auth;