import type { FC } from 'react';
import React from 'react';
import type { StoryObj, Meta, StoryFn } from '@storybook/react';

const Component: FC = () => <p>Story</p>;

export default {
  component: Component,
  decorators: [
    (Story) => (
      <>
        <p>Component Decorator</p>
        <Story />
      </>
    ),
  ],
} as Meta<typeof Component>;

export const All: StoryObj<typeof Component> = {
  decorators: [
    (Story) => (
      <>
        <p>Local Decorator</p>
        <Story />
      </>
    ),
  ],
};

export const CSF2All: StoryFn = (args) => <Component {...args} />;
CSF2All.decorators = All.decorators;
