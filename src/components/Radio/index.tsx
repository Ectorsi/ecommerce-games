import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
    onCheck?: (value?: RadioValue) => void;
    labelColor?: 'white' | 'black';
    label?: string;
    labelFor?: string;
    value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
    onCheck,
    labelColor = 'white',
    label,
    labelFor = '',
    value,
    ...props
}: RadioProps) => {

    const onChange = () => {
        !!onCheck && onCheck(value)
    }

    return (
        <S.Wrapper>
            <S.Input
                id={labelFor}
                type="radio"
                value={value}
                onChange={onChange}
                {...props}
            />
            {!!label && (
                <S.Label htmlFor={labelFor} labelColor={labelColor}>
                    {label}
                </S.Label>)}
        </S.Wrapper>
    );
}

export default Radio;
