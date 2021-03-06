import { Email, Lock } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import { FormLink, FormWrapper } from 'components/Form';
import TextField from 'components/TextField';
import Link from 'next/link';
import * as S from './styles';

const FormSignIn = () => (
    <FormWrapper>
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
        <FormLink>
            Don't have account?
            {' '}
            <Link href="/sign-up">
                <a>Sign Up</a>
            </Link>
        </FormLink>
    </FormWrapper>
);

export default FormSignIn;
