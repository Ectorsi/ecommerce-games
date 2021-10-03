import { Email, Lock } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import TextField from 'components/TextField';
import Link from 'next/link';
import * as S from './styles';


const FormSignIn = () => (
    <S.Wrapper>
        <form>
            <TextField
                icon={<Email />}
                placeholder="Email"
                name="email"
                type="email"
            />
            <TextField
                icon={<Lock />}
                placeholder="Password"
                name="password"
                type="password"
            />
        </form>
        <S.ForgotPassword href="#" >
            Forgot your password?
        </S.ForgotPassword>
        <Button fullWidth>
            Sign in now
        </Button>
        <S.FormLink>
            Don't have account?
            {' '}
            <Link href="/sign-up">
                <a>Sign Up</a>
            </Link>
        </S.FormLink>
    </S.Wrapper>
);

export default FormSignIn;
