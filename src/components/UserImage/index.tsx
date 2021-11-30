import NextImage from "next/image"
import { Box } from "@chakra-ui/react"

import { styles } from "./style"

interface ImageProps {
  src: string
  size: number
  transition?: string
  _hover?: React.CSSProperties
}

export function UserImage({ src, size, transition, _hover }: ImageProps) {
  return (
    <Box
      borderRadius="50%"
      style={{ ...styles.imageWrapper, width: size }}
      transition={transition}
      _hover={_hover}
    >
      <NextImage src={src} alt="" width={size} height={size} />
    </Box>
  )
}
