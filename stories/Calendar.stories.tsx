import { Story, Meta } from "@storybook/react"
import { Calendar, CalendarProps } from "../src/components/Calendar"

export default {
  component: Calendar,
  title: "Components/Calendar"
} as Meta

const Template: Story<CalendarProps> = args => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  showIcon: true,
  placeholder: "Selecione uma data"
}
