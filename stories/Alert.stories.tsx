import { Story, Meta } from "@storybook/react"
import { Alert, AlertProps } from "../src/components/Alert"

export default {
  component: Alert,
  title: "Components/Alert"
} as Meta

const Template: Story<AlertProps> = args => <Alert {...args} />

export const Success = Template.bind({})
Success.args = {
  variant: "success",
  label: "Sucesso!"
}

export const Error = Template.bind({})
Error.args = {
  variant: "error",
  label: "Errro!"
}
