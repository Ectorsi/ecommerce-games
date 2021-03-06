import { AddShoppingCart, Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button from 'components/Button';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';


import * as S from './styles';

export type GameCardProps = {
    title: string;
    developer: string;
    ribbon?: React.ReactNode;
    ribbonColor?: RibbonColors;
    ribbonSize?: RibbonSizes;
    img: string;
    price: string;
    promotionalPrice?: string;
    favorite?: boolean;
    onFav?: () => void;
};

const GameCard = ({
    title,
    developer,
    ribbon,
    ribbonColor = 'primary',
    ribbonSize = 'small',
    img,
    price,
    promotionalPrice,
    favorite = false,
    onFav
}: GameCardProps) => {

    return (
        <S.Wrapper>
            {!!ribbon && <Ribbon children={ribbon} color={ribbonColor} size={ribbonSize} />}
            <S.ImageBox role="img">
                <img src={img} alt={title} />
            </S.ImageBox>
            <S.Content>
                <S.Info>
                    <S.Title> {title} </S.Title>
                    <S.Developer> {developer} </S.Developer>
                </S.Info>
                <S.FavButton role="button" onClick={onFav} >
                    {favorite ?
                        <Favorite aria-label="remove from Wishlist" />
                        :
                        <FavoriteBorder aria-label="Add to Wishlist" />}
                </S.FavButton>
                <S.BuyBox>
                    {!!promotionalPrice && <S.Price isPromotional> {price} </S.Price>}
                    <S.Price> {promotionalPrice || price} </S.Price>
                    <Button icon={<AddShoppingCart />} size="small" />
                </S.BuyBox>
            </S.Content>
        </S.Wrapper>
    );
}

export default GameCard;
