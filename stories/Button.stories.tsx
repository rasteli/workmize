import { Story, Meta } from "@storybook/react"
import { Button, ButtonProps } from "../src/components/Button"

export default {
  component: Button,
  title: "Components/Button"
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Default Button"
}

export const Login = Template.bind({})
Login.args = {
  label: "Login",
  backgroundColor: "#48BB78"
}
