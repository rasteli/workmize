import { Story, Meta } from "@storybook/react"
import { Combobox, ComboboxProps } from "../src/components/Combobox"

export default {
  component: Combobox,
  title: "Components/Combobox"
} as Meta

const Template: Story<ComboboxProps> = args => <Combobox {...args} />

export const Roles = Template.bind({})
Roles.args = {
  items: ["Administrador", "Membro"]
}
