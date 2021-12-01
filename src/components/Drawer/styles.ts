export const styles = {
  container: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,

    boxShadow: "3px 3px 10px #00000080"
  }),

  header: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,

    width: "100%",
    color: "#FFFFFF",
    padding: 25
  }),

  closeButton: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,
    color: "#FFFFFF",

    position: "absolute",
    boxShadow: "0px 3px 10px #00000073",

    top: 20,
    left: -28,

    padding: 10,
    borderRadius: "50%",
    transform: "scale(1.2)"
  }),

  checked: {
    cursor: "pointer",
    position: "absolute",

    left: 10,
    top: 110
  } as React.CSSProperties,

  inputBlock: {
    marginBottom: 20
  } as React.CSSProperties,

  textarea: {
    margin: 20,
    resize: "none",
    borderRadius: 8,
    padding: 5,
    paddingBottom: 15,
    width: "90%",
    transition: "0.3s"
  } as React.CSSProperties
}
