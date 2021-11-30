export const styles = {
  container: (backgroundColor: string): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",

    backgroundColor,
    borderRadius: 20,

    width: "100%",
    padding: 20,
    margin: "30px 20px"
  }),

  imageWrapper: {
    display: "flex",
    alignSelf: "center",

    width: 110,
    overflow: "hidden",
    borderRadius: "50%",

    marginTop: 20,
    marginBottom: 20
  } as React.CSSProperties
}
