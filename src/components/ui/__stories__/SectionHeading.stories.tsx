import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SectionHeading } from '../SectionHeading';

const meta: Meta<typeof SectionHeading> = {
  title: 'UI/SectionHeading',
  component: SectionHeading,
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const TitleOnly: Story = {
  args: {
    title: 'Section Title',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Section Title',
    subtitle: 'A brief description of this section.',
  },
};
