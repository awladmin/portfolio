import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '../Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email',
    id: 'email',
    placeholder: 'jane@example.com',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    id: 'email-error',
    placeholder: 'jane@example.com',
    error: 'Please enter a valid email address.',
  },
};
