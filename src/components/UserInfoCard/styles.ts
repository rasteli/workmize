export const styles = {
  container: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,
    boxShadow: "0px 2px 10px #0000003D",

    position: "absolute",
    right: 0,
    zIndex: 10,

    padding: "15px 20px 0px 20px",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  }),

  containerAfter: {
    top: "-0.5",
    right: 6,
    content: '""',
    position: "absolute",

    height: "4px",
    width: "20px",
    borderRadius: 20,
    backgroundColor: "#805AD5"
  } as React.CSSProperties,

  name: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: "bold"
  } as React.CSSProperties,

  email: {
    fontSize: 14,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    color: "#718086"
  } as React.CSSProperties,

  logoffButton: {
    display: "flex",
    alignItems: "center",
    fontSize: 15,

    marginTop: -10,
    marginLeft: -15,
    color: "#F5565C"
  } as React.CSSProperties,

  logoffIcon: {
    marginRight: -15,
    transform: "scale(0.3)"
  } as React.CSSProperties
}
