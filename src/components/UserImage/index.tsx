import NextImage from "next/image"
import { Box } from "@chakra-ui/react"

import { styles } from "./style"

interface ImageProps {
  src: string
  size: number
  noMargin?: boolean
  transition?: string
  _hover?: React.CSSProperties
}

export function UserImage({
  src,
  size,
  noMargin,
  transition,
  _hover
}: ImageProps) {
  const margin = noMargin ? {} : { marginTop: 20, marginBottom: 20 }

  return (
    <Box
      borderRadius="50%"
      style={{ ...styles.imageWrapper, width: size, ...margin }}
      transition={transition}
      _hover={_hover}
    >
      <NextImage
        src={`https://hiring-api.workmize.com/${src}`}
        alt=""
        width={size}
        height={size}
      />
    </Box>
  )
}
