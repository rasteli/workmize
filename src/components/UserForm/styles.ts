export const styles = {
  form: {
    display: "flex",
    flexDirection: "column"
  } as React.CSSProperties,

  inputBlock: (gap: number): React.CSSProperties => ({
    marginBottom: gap,
    position: "relative"
  })
}
