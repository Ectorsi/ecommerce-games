import { Email, Lock } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import TextField from 'components/TextField';
import Auth from 'templates/Auth';

export default function SignIn() {
    return (
        <Auth title="Sign In" >
            <TextField icon={<Email />} placeholder="Email" />
            <TextField icon={<Lock />} placeholder="password" />

            <Button>
                Sign in now
            </Button>
        </Auth>
    )
};