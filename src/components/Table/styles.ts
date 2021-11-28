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

  table: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,

    width: "100%",
    borderRadius: 20,
    overflow: "hidden"
  }),

  tr: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor
  }),

  th: (index: number, borderColor: string): React.CSSProperties => ({
    borderLeft: index === 1 ? `2px solid ${borderColor}` : "",
    borderRight: index === 1 ? `2px solid ${borderColor}` : "",

    width: 500,
    textAlign: "left",
    padding: "10px 20px"
  }),

  checkbox: {
    marginRight: 15,
    verticalAlign: "middle"
  } as React.CSSProperties,

  td: (cIndex: number): React.CSSProperties => ({
    padding: 20,
    maxWidth: "30vw",

    display: cIndex % 3 === 0 ? "flex" : "table-cell"
  })
}
