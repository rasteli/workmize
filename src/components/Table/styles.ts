export const styles = {
  container: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,

    width: "100%",
    borderRadius: 20
  }),

  tr: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor
  }),

  th: (index: number, borderColor: string): React.CSSProperties => ({
    borderLeft: index === 1 ? `2px solid ${borderColor}` : "",
    borderRight: index === 1 ? `2px solid ${borderColor}` : "",

    padding: "5px 0px 5px 15px",
    textAlign: "left"
  }),

  checkbox: {
    marginRight: 15,
    verticalAlign: "middle"
  } as React.CSSProperties,

  td: {
    padding: "10px 20px"
  } as React.CSSProperties
}
