import { useLayoutEffect, useState } from "react"

export function useViewport(threshold: number) {
  const [innerWidth, setInnerWidth] = useState(undefined)

  useLayoutEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth)
    }

    if (typeof window !== "undefined") {
      handleResize()

      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize)
    }
  })

  return { innerWidth, aboveThreshold: innerWidth > threshold }
}
