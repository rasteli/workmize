import { Story, Meta } from "@storybook/react"
import { Toast, ToastProps } from "../src/components/Toast"

export default {
  component: Toast,
  title: "Components/Toast"
} as Meta

const Template: Story<ToastProps> = args => <Toast {...args} />

export const Success = Template.bind({})
Success.args = {
  open: true,
  variant: "success",
  message: "Sucesso!"
}

export const Error = Template.bind({})
Error.args = {
  open: true,
  variant: "error",
  message: "Errro!"
}
