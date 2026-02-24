import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from '../Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Message',
    id: 'message',
    rows: 4,
    placeholder: 'Tell us about your project...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    id: 'message-error',
    rows: 4,
    placeholder: 'Tell us about your project...',
    error: 'Message is required.',
  },
};
