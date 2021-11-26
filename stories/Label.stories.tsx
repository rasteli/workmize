import { Story, Meta } from "@storybook/react"
import { Label, LabelProps } from "../src/components/Label"

export default {
  component: Label,
  title: "Components/Label"
} as Meta

const Template: Story<LabelProps> = args => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  value: "Default label"
}

export const Required = Template.bind({})
Required.args = {
  value: "Required field",
  required: true
}
