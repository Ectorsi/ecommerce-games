import { Email, Lock } from '@styled-icons/material-outlined';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import Button from 'components/Button';
import TextField from 'components/TextField';
import Auth from 'templates/Auth';

export default function SignUp() {
    return (
        <Auth title="Sign Up" >
            <TextField icon={<UserCircle />} placeholder="Name" />
            <TextField icon={<Email />} placeholder="Email" />
            <TextField icon={<Lock />} placeholder="password" />
            <TextField icon={<Lock />} placeholder="Confirme passowrd" />

            <Button>
                Sign up now
            </Button>
        </Auth>
    )
};