import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 20px;
  line-height: 10px;
  padding: 23px;
`

const Logo = () => {

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Text
            fontFamily="'Open Sans', sans-serif"
            fontWeight="bold"
            ml={3}
          >
            okyash007.
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
