import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '.';
import { Email } from '@styled-icons/material-outlined';

export default {
    title: 'TextField',
    component: TextField,
    args: {
        label: 'E-mail',
        labelFor: 'Email',
        icon: <Email />,
        id: 'Email',
        initialValue: '',
        placeholder: 'ector-si@hotmail.com',
        disabled: false,
        iconPosition: 'left'
    },
    argTypes: {
        onInput: { action: 'changed' },
        icon: {
            type: ''
        }
    }
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }} >
        <TextField {...args} />
    </div>
);

export const WithIcon: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }} >
        <TextField {...args} />
    </div>
);

WithIcon.args = {
    icon: <Email />
};

export const HasDisabled: Story<TextFieldProps> = (args) => (
    <div style={{ maxWidth: 300, padding: 15 }} >
        <TextField {...args} disabled />
    </div>
);