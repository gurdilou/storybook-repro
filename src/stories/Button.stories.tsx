import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
// @ts-ignore
import CustomDoc from "./Button.doc.mdx";

export default {
  title: 'Example/Button',
  component: Button,

  argTypes: {
    backgroundColor: {
      control: 'color',
      description: "**An overriden description in .stories.tsx file**"
    },
  },
  parameters: {
    docs: {
      page: CustomDoc
    },
    controls: {
      expanded: "true"
    }
  }

} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
