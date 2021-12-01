export const styles = {
  container: (backgroundColor: string): React.CSSProperties => ({
    backgroundColor,
    color: "#FFFFFF",
    fontSize: 14,

    display: "flex",
    alignItems: "center",
    borderRadius: 20,

    maxHeight: "60px",
    maxWidth: "300px",

    padding: 20
  }),

  icon: (variant: string): React.CSSProperties => ({
    marginRight: 15,
    transform: variant === "success" && "scale(1.2)"
  }),

  closeButton: {
    position: "absolute",
    top: 0,
    right: 10
  } as React.CSSProperties
}
