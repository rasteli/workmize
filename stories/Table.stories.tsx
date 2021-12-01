import { ApolloProvider } from "@apollo/client"
import { Story, Meta } from "@storybook/react"
import { Table } from "../src/components/Table"

import { client } from "../src/services/api"
import { TaskProvider } from "../src/contexts/TaskContext"

export default {
  component: Table,
  title: "Components/Table",
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

const Template: Story = args => <Table {...args} />

export const Default = Template.bind({})
