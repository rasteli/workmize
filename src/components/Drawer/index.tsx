import "./textarea.css"

import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton
} from "@chakra-ui/react"
import { useState } from "react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { Label } from "../Label"
import { Combobox } from "../Combobox"
import { Calendar } from "../Calendar"

import { styles } from "./styles"

import Chevron from "../../assets/chevron.svg"
import Checked from "../../assets/check_checked.svg"
import Unchecked from "../../assets/check_unchecked.svg"

export interface DrawerProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Drawer({ open, setOpen }: DrawerProps) {
  const items = ["Usuário 1", "Usuário 2", "Usuário 3"]

  const headerBg = useColorModeValue("#BCA8E9", "#31274F")
  const containerBg = useColorModeValue("#FFFFFF", "#171923")
  const closeButtonBg = useColorModeValue("#A0AEC0", "#464750")

  const [done, setDone] = useState(false)

  return (
    <ChakraDrawer
      isOpen={open}
      placement="right"
      onClose={() => setOpen(false)}
      variant="customWidth"
    >
      <DrawerOverlay />
      <DrawerContent style={styles.container(containerBg)}>
        <IconButton
          icon={<Chevron />}
          aria-label="close button"
          style={styles.closeButton(closeButtonBg)}
          onClick={() => setOpen(false)}
        />

        <DrawerHeader style={styles.header(headerBg)}>
          Visualizar tarefa
        </DrawerHeader>

        <DrawerBody>
          <div>
            {done ? (
              <Checked style={styles.checked} onClick={() => setDone(false)} />
            ) : (
              <Unchecked style={styles.checked} onClick={() => setDone(true)} />
            )}
            <textarea className="task" rows={3} style={styles.textarea}>
              Tarefa 1
            </textarea>
          </div>

          <div style={{ marginBottom: 20 }}>
            <Combobox
              searchable
              items={items}
              defaultAction={false}
              label="Responsáveis"
              position="absolute"
              placeholder="Adicione um ou vários"
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <Label value="Entrega" />
            <Calendar placeholder="Selecione ou digite uma data" fullWidth />
          </div>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}
