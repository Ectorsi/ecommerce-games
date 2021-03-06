import { Download } from '@styled-icons/material-outlined';
import * as S from './styles';

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
}

const GameItem = ({ img, title, price, downloadLink }: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
  </S.Wrapper>
);

export default GameItem;
