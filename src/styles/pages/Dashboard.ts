export const styles = {
  container: (backgroundColor: string): React.CSSProperties => ({
    display: "flex",
    height: "100vh",

    backgroundColor
  }),

  aside: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "space-between",

    marginLeft: -15,
    marginRight: -15
  } as React.CSSProperties,

  asideBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  } as React.CSSProperties,

  toggleColorMode: (aboveThreshold: boolean): React.CSSProperties => ({
    margin: aboveThreshold ? "0 0 0 15px" : "10px auto 10px auto",

    cursor: "pointer",
    transform: "scale(1.2)"
  }),

  workmizeIso: {
    marginTop: 30,
    marginBottom: 30,
    transform: "scale(1.2)"
  } as React.CSSProperties,

  homeIcon: (
    backgroundColor: string,
    boxShadow: string
  ): React.CSSProperties => ({
    padding: 15,
    marginTop: 40,

    boxShadow,
    borderRadius: 10,
    transform: "scale(1.2)",
    backgroundColor: backgroundColor
  }),

  imageWrapper: {
    display: "flex",
    alignSelf: "center",

    overflow: "hidden",
    borderRadius: "50%",

    marginTop: 20,
    marginBottom: 20
  } as React.CSSProperties,

  main: (borderColor: string): React.CSSProperties => ({
    borderTopLeftRadius: 50,
    borderTop: `1px solid ${borderColor}`,
    borderLeft: `1px solid ${borderColor}`,

    width: "100%",
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20
  }),

  header: {
    display: "flex",
    flexDirection: "column"
  } as React.CSSProperties,

  userInfo: {
    display: "flex",
    alignItems: "center",

    marginBottom: -20
  } as React.CSSProperties,

  h1: {
    flexGrow: 1,
    marginLeft: 15,

    fontSize: 22,
    fontWeight: "bold"
  } as React.CSSProperties,

  h2: {
    fontSize: 12,
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 5
  } as React.CSSProperties,

  filter: (aboveThreshold: boolean): React.CSSProperties => ({
    display: "flex",
    flexDirection: aboveThreshold ? "row" : "column",
    alignItems: aboveThreshold ? "center" : "flex-start"
  })
}
