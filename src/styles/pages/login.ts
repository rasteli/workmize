export const styles = {
  container: {
    display: "flex"
  } as React.CSSProperties,

  logo: {
    marginTop: -40,
    marginBottom: 100
  } as React.CSSProperties,

  form: (aboveThreshold: boolean): React.CSSProperties => ({
    width: "100%",
    padding: `0px ${aboveThreshold ? "100px" : "50px"}`
  }),

  main: (
    backgroundColor: string,
    aboveThreshold: boolean
  ): React.CSSProperties => ({
    backgroundColor,

    height: "100vh",
    width: aboveThreshold ? "40%" : "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }),

  h1: {
    fontSize: 22,
    fontWeight: "bold"
  } as React.CSSProperties,

  h3: {
    fontSize: 14,
    marginBottom: 30
  } as React.CSSProperties,

  footer: {
    marginTop: 10
  } as React.CSSProperties,

  createUser: {
    color: "#B794F4",
    cursor: "pointer",
    marginLeft: 10
  } as React.CSSProperties,

  aside: (background: string): React.CSSProperties => ({
    width: "60%",
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",

    background,
    color: "#FFF"
  }),

  worktime: {
    transform: "scale(1.2)",
    marginBottom: 50
  } as React.CSSProperties,

  toggleColorMode: {
    cursor: "pointer",
    position: "absolute",

    top: 20,
    right: 20
  } as React.CSSProperties
}
