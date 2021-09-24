import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
    onInput?: (value: string) => void;
    label?: string;
    labelFor?: string;
    initialValue?: string;
    icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
    onInput,
    label,
    labelFor = '',
    initialValue = '',
    icon,
    ...props
}: TextFieldProps) => {

    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);

        !!onInput && onInput(newValue);
    }

    return (
        <S.Wrapper>
            {!!label &&
                <S.Label htmlFor={labelFor} >
                    {label}
                </S.Label>}
            <S.InputWrapper hasIcon={!!icon} >
                {icon} <span><S.Input type="text" value={value} onChange={onChange} {...props} /></span>
            </S.InputWrapper>
        </S.Wrapper>
    );
}

export default TextField;
