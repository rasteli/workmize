export const styles = {
  container: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,
    color: "#FFFFFF",

    display: "flex",
    alignItems: "center",

    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  }),

  icon: {
    marginRight: 15
  } as React.CSSProperties
}
