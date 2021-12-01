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
  open: true
}
