import { Story, Meta } from "@storybook/react"
import { ApolloProvider } from "@apollo/client"
import { Modal, ModalProps } from "../src/components/Modal"
import { UserForm } from "../src/components/UserForm"

import User from "../src/assets/user.svg"
import { client } from "../src/services/api"

export default {
  component: Modal,
  title: "Components/Modal",
  decorators: [
    Story => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    )
  ]
} as Meta

const Template: Story<ModalProps> = args => <Modal {...args} />

export const CreateUser = Template.bind({})
CreateUser.args = {
  header: (
    <>
      <User />
      <h1 style={{ marginLeft: 10 }}>Criar usuário</h1>
    </>
  ),
  children: <UserForm type="signup" onSubmit={null} />
}
