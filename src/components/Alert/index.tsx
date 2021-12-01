import { styles } from "./styles"
import { variants } from "../../utils/alertVariants"

export interface AlertProps {
  label: string
  variant: "error" | "success"
}

export function Alert({ label, variant }: AlertProps) {
  const alertBg = variants[variant].bg
  const AlertIcon = variants[variant].icon

  return (
    <div style={styles.container(alertBg)}>
      <AlertIcon style={styles.icon} />
      <p>{label}</p>
    </div>
  )
}
