import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Button, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useTheme } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLink } from 'react-icons/io5'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
      loading="lazy"
    />
    <LinkOverlay href={href} target="_blank">
      <Text mt={2}>{title}</Text>
    </LinkOverlay>
    <Text fontSize={14}>{children}</Text>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  const theme = useTheme()

  console.log(theme)

  return (
    <Box
      borderRadius="lg"
      p={5}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      <Text mt={2} fontSize={30} margin={0}>
        {title}
      </Text>
      <Text opacity={0.6} fontSize={14}>
        {children}
      </Text>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
