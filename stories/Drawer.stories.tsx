import { ApolloProvider } from "@apollo/client"
import { Story, Meta } from "@storybook/react"

import { client } from "../src/services/api"
import { TaskProvider } from "../src/contexts/TaskContext"
import { Drawer, DrawerProps } from "../src/components/Drawer"

export default {
  component: Drawer,
  title: "Components/Drawer",
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

const Template: Story<DrawerProps> = args => <Drawer {...args} />

export const Default = Template.bind({})
Default.args = {
  open: true,
  task: {
    id: "1",
    name: "Tarefa 1",
    isDone: false,
    completionDate: "2021-12-16T15:00:00.000Z",
    users: [
      {
        id: "user 1",
        name: "Usuário 1",
        avatar: "no-photo.jpg"
      }
    ]
  }
}
