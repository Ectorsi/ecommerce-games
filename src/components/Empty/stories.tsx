import { Story, Meta } from '@storybook/react/types-6-0';
import Empty, { EmptyProps } from '.';

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

export const Default: Story<EmptyProps> = (args) => {
  return (
    <div style={{
      maxWidth: '130rem',
      margin: '0 auto'
    }}>
      <Empty {...args} />
    </div>
  )
}

Default.args = {
  title: 'Nenhum resultado encontrado',
  description: 'Infelizmente não achamos nenhum resultado para a sua busca.',
  hasLink: true
}