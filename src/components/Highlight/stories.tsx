import { Story, Meta } from '@storybook/react/types-6-0';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: 'img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{
    maxWidth: '104rem',
    margin: '0 auto'
  }} >
    <Highlight {...args} />
  </div>
);

export const WithFloatImageleft: Story<HighlightProps> = (args) => (
  <div style={{
    maxWidth: '104rem',
    margin: '0 auto'
  }} >
    <Highlight {...args} />
  </div>
);

WithFloatImageleft.args = {
  floatImage: 'img/red-dead-float.png',
}