export const styles = {
  button: (
    color: string,
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
    color,
    backgroundColor,
    width: isFullWidth ? "100%" : width,

    marginTop,
    marginLeft,
    marginRight,
    marginBottom
  })
}
