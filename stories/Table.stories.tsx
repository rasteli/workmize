import { Story, Meta } from "@storybook/react"
import { Table } from "../src/components/Table"

export default {
  component: Table,
  title: "Components/Table"
} as Meta

// const Template: Story = args => <Table {...args} />

export const Default = () => <Table />
