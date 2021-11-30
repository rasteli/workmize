export const styles = {
  labelWrapper: {
    display: "flex",
    alignItems: "center"
  } as React.CSSProperties,

  label: (invalid: boolean): React.CSSProperties => ({
    flexGrow: 1,
    color: invalid && "#F5565C"
  }),

  span: {
    color: "#F5565C",
    fontSize: 10,
    marginLeft: 5
  } as React.CSSProperties
}
