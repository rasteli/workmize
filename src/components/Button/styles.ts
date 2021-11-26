export const styles = {
  button: (
    width: string,
    height: string,
    backgroundColor: string,
    isFullWidth: boolean,
    marginTop: number,
    marginLeft: number,
    marginRight: number,
    marginBottom: number
  ): React.CSSProperties => ({
    height,
    color: "#fff",
    backgroundColor,
    width: isFullWidth ? "100%" : width,

    marginTop,
    marginLeft,
    marginRight,
    marginBottom
  })
}
