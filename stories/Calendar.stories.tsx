import { Story, Meta } from "@storybook/react"
import { ApolloProvider } from "@apollo/client"

import { client } from "../src/services/api"
import { TaskProvider } from "../src/contexts/TaskContext"
import { Calendar, CalendarProps } from "../src/components/Calendar"

export default {
  component: Calendar,
  title: "Components/Calendar",
  decorators: [
    Story => (
      <ApolloProvider client={client}>
        <TaskProvider>
          <Story />
        </TaskProvider>
      </ApolloProvider>
    )
  ]
} as Meta

const Template: Story<CalendarProps> = args => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  showIcon: true,
  placeholder: "Selecione uma data"
}
