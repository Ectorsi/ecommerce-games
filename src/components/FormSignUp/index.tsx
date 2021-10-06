import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import TextField from 'components/TextField';
import Link from 'next/link';
import { FormWrapper, FormLink } from 'components/Form';


const FormSignUp = () => (
    <FormWrapper>
        <form>
            <TextField
                icon={<AccountCircle />}
                placeholder="Name"
                name="name"
                type="name"
            />
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
            <TextField
                icon={<Lock />}
                placeholder="Confirm Password"
                name="confirmPassword"
                type="confirmPassword"
            />
        </form>
        <Button fullWidth>
            Sign up now
        </Button>
        <FormLink>
            Already have account?
            {' '}
            <Link href="/sign-in">
                <a>Sign In</a>
            </Link>
        </FormLink>
    </FormWrapper>
);

export default FormSignUp;
