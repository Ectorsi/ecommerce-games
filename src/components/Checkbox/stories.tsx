import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';

export default {
    title: 'Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'won-dark'
        },
    },
    argTypes: {
        onCheck: { action: 'checked' }
    }
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
    <>
        <div style={{ padding: 10 }} >
            <Checkbox
                {...args}
                label="Teste"
                isChecked
            />
        </div>
        <div style={{ padding: 10 }} >
            <Checkbox
                {...args}
                label="Teste"
            />
        </div>
        <div style={{ padding: 10 }} >
            <Checkbox
                {...args}
                label="Teste"
            />
        </div>
    </>
)

