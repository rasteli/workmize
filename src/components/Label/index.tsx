import { styles } from "./styles"
import Required from "../../assets/required.svg"

export interface LabelProps {
  value: string
  required?: boolean
}

export function Label({ value, required = false }: LabelProps) {
  return (
    <div style={styles.labelWrapper}>
      <label style={{ flexGrow: 1 }}>{value}</label>
      {required && (
        <>
          <Required /> <span style={styles.span}>OBRIGATÓRIO</span>
        </>
      )}
    </div>
  )
}
