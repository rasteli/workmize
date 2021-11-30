export const styles = {
  container: {
    display: "flex",
    marginTop: 20,

    width: "100%",
    alignItems: "center"
  } as React.CSSProperties,

  page: {
    margin: "auto",
    display: "flex",
    alignItems: "center"
  } as React.CSSProperties,

  currentPage: (
    backgroundColor: string,
    boxShadow: string
  ): React.CSSProperties => ({
    boxShadow,
    backgroundColor,

    borderRadius: 5,
    padding: "5px 12px",

    marginLeft: 15,
    marginRight: 15
  })
}
