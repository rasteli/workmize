export const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 10,
    backgroundColor: "#FFFFFF00",
    backdropFilter: "blur(10px)"
  } as React.CSSProperties,

  outerContainer: (translateY: number): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",

    maxWidth: "600px",
    minWidth: "400px",
    position: "fixed",

    top: "50%",
    left: "50%",
    transform: `translate(-50%, ${translateY}%)`,

    zIndex: 10,
    borderRadius: 36,
    boxShadow: "0px 2px 10px #0000003D"
  }),

  closeButton: {
    position: "absolute",
    right: 15,

    boxShadow: "none",
    background: "none"
  } as React.CSSProperties,

  innerContainer: (backgroundColor: string): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",

    backgroundColor,
    borderRadius: 20,

    width: "100%",
    padding: 20,
    margin: "30px 20px"
  }),

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
