import { Story, Meta } from "@storybook/react"
import { Input, InputProps } from "../src/components/Input"

import { theme } from "../src/theme"

export default {
  component: Input,
  title: "Components/Input"
} as Meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: "Default Input"
}
