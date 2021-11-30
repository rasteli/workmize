import { styles } from "./styles"
import Required from "../../assets/required.svg"

export interface LabelProps {
  value: string
  invalid?: boolean
  required?: boolean
}

export function Label({
  value,
  required = false,
  invalid = false
}: LabelProps) {
  return (
    <div style={styles.labelWrapper}>
      <label style={styles.label(invalid)}>{value}</label>
      {required && (
        <>
          <Required /> <span style={styles.span}>OBRIGATÓRIO</span>
        </>
      )}
    </div>
  )
}
