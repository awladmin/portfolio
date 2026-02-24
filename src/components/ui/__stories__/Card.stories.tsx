import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from '../Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Card content goes here.',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Card with extra padding.',
    className: 'p-10',
  },
};
