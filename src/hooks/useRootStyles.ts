export function useRootStyles(props: any[], values: any[]) {
  const styleProps = props.map((prop, index) => {
    return { prop, value: values[index] }
  })

  if (typeof window !== "undefined") {
    const root = document.documentElement

    styleProps.map(({ prop, value }) => {
      root.style.setProperty(prop, value)
    })
  }
}
