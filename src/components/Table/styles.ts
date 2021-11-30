export const styles = {
  container: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,

    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    padding: 20,
    borderRadius: 20
  }),

  header: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,

    color: "#D1D0D1"
  } as React.CSSProperties,

  table: (backgroundColor: string, fontSize: number): React.CSSProperties => ({
    fontSize,
    backgroundColor,

    width: "100%",
    borderRadius: 20,
    overflow: "hidden"
  }),

  thead: (borderColor: string): React.CSSProperties => ({
    borderBottom: `2px solid ${borderColor}`,
    color: "#718086"
  }),

  tr: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor
  }),

  th: (index: number, borderColor: string): React.CSSProperties => ({
    borderLeft: index === 1 ? `2px solid ${borderColor}` : "",
    borderRight: index === 1 ? `2px solid ${borderColor}` : "",

    textAlign: "left",
    padding: "10px 20px"
  }),

  checkbox: (borderColor: string): React.CSSProperties => ({
    marginRight: 15,
    verticalAlign: "middle",

    borderColor
  }),

  td: (cIndex: number): React.CSSProperties => ({
    padding: 20,
    maxWidth: "30vw",

    display: cIndex % 3 === 0 ? "flex" : "table-cell"
  })
}
