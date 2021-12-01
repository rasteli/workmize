export const styles = {
  item: {
    display: "flex",
    alignItems: "center",

    height: 45
  } as React.CSSProperties,

  p: {
    marginLeft: 15
  } as React.CSSProperties,

  checkbox: (borderColor: string): React.CSSProperties => ({
    marginRight: 10,
    verticalAlign: "middle",

    borderColor
  })
}
