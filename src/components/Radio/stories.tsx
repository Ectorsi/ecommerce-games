import { Story, Meta } from '@storybook/react/types-6-0';
import Radio, { RadioProps } from '.';

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta;

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }} >
      <Radio
        id="primeiro"
        label="primeiro"
        labelFor="primeiro"
        name="radio"
        value="primeiro"
        defaultChecked
        {...args} />
    </div>
    <div style={{ padding: 10 }} >
      <Radio
        id="segundo"
        label="segundo"
        labelFor="segundo"
        name="radio"
        value="segundo"
        {...args} />
    </div>
    <div style={{ padding: 10 }} >
      <Radio
        id="terceiro"
        label="terceiro"
        labelFor="terceiro"
        name="radio"
        value="terceiro"
        {...args} />
    </div>
  </>
)

