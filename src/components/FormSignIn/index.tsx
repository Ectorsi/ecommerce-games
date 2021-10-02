import { Email, Lock } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import TextField from 'components/TextField';
import * as S from './styles';


const FormSignIn = () => (
    <S.Wrapper>
        <S.InputWrapper>
            <TextField icon={<Email />} placeholder="Email" />
            <TextField icon={<Lock />} placeholder="Password" />
        </S.InputWrapper>
        <Button minimal  >
            Forgot your password?
        </Button>
        <Button>Sign in now</Button>
        <span>Don't have account?</span>
        <Button minimal>
            Sign up
        </Button>

    </S.Wrapper>
);

export default FormSignIn;
