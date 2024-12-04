import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';


const meta = {
    title: 'React Native Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Hello world',
        onPress: () => console.log('Hello Woooooorld!'),
        disabled: false,
    },
};
