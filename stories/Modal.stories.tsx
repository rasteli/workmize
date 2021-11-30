import { Story, Meta } from "@storybook/react"
import { Modal, ModalProps } from "../src/components/Modal"
import { UserForm } from "../src/components/UserForm"

import User from "../src/assets/user.svg"

export default {
  component: Modal,
  title: "Components/Modal"
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
  children: <UserForm type="signup" />
}
