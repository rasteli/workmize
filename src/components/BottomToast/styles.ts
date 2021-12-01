export const styles = {
  container: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0px 3px 15px #00000099",

    position: "absolute",
    bottom: 15,
    transform: "translate(50%)"
  } as React.CSSProperties,

  header: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,

    display: "flex",
    alignItems: "center",

    padding: 5
  }),

  main: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }),

  button: {
    color: "#B794F4",

    marginRight: 15
  } as React.CSSProperties,

  check: {
    marginLeft: 15,
    marginRight: 15
  } as React.CSSProperties,

  title: {
    flexGrow: 1
  } as React.CSSProperties,

  taskActionBlock: (color: string): React.CSSProperties => ({
    color,

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 10
  }),

  taskActionButton: {
    background: "none",
    transform: "scale(1.2)"
  } as React.CSSProperties
}
