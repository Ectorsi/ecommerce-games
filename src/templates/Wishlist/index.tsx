import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Container } from 'components/Container';
import { HighlightProps } from 'components/Highlight';
import { Grid } from 'components/Grid';
import { Divider } from 'components/Divider';
import Empty from 'components/Empty';

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({ recommendedGames, recommendedHighlight, games }: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor='secondary' >Wishlist</Heading>

      {games ?
        (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        )
        : (
          <Empty
            title='Nenhum resultado encontrado'
            description='Infelizmente não achamos nenhum resultado para a sua busca.'
            hasLink
          />

        )
      }

      <Divider />
    </Container>
    <Showcase title='You may like these games' games={recommendedGames} highlight={recommendedHighlight} />
  </Base>
);

export default Wishlist;
