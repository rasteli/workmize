import { Story, Meta } from "@storybook/react"
import { BottomToast, BottomToastProps } from "../src/components/BottomToast"

export default {
  component: BottomToast,
  title: "Components/BottomToast"
} as Meta

const Template: Story<BottomToastProps> = args => <BottomToast {...args} />

export const Default = Template.bind({})
Default.args = {
  taskCount: 0,
  open: true
}
