export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",

    maxWidth: "400px",
    position: "relative",

    borderRadius: 36,
    boxShadow: "0px 2px 10px #0000003D"
  } as React.CSSProperties,

  closeButton: {
    position: "absolute",
    right: 15,

    boxShadow: "none",
    background: "none"
  } as React.CSSProperties,

  header: (backgroundColor: string): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    padding: "15px 25px",

    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor,

    borderTopLeftRadius: 36,
    borderTopRightRadius: 36
  }),

  main: (color: string, backgroundColor: string): React.CSSProperties => ({
    display: "flex",
    justifyContent: "center",
    fontSize: 15,

    color,
    backgroundColor,

    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36
  })
}
