export const styles = {
  comboboxMenuStyle: (
    color: string,
    backgroundColor: string,
    position: "static" | "relative" | "absolute" | "sticky" | "fixed"
  ): React.CSSProperties => ({
    color,
    backgroundColor,

    padding: 10,
    borderWidth: 2,
    borderRadius: 15,

    borderColor: "#CBD5E0",
    listStyleType: "none",

    position,
    zIndex: 5,
    width: "100%",
    maxHeight: "400px",

    overflowY: "scroll"
  }),

  item: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  } as React.CSSProperties,

  searchInput: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #718086",
    borderRadius: 2,
    marginBottom: 10
  } as React.CSSProperties
}
