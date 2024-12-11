import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  HStack,
  Wrap
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoLogoBehance } from 'react-icons/io5'
import Image from 'next/image'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton
} from '@chakra-ui/react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m Yash Verma
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yash Verma
          </Heading>
          <p>Full Stack Developer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hello! 👋 I'm Yash Verma, a 4th-year undergraduate student at Jaypee
          Institute of Information Technology in Noida, UP. I have a passion for
          transforming complex problems into simple and elegant web
          applications. My expertise lies in front-end development with
          technologies like JavaScript, TypeScript, React.js, and Next.js,
          enabling me to craft responsive and engaging user interfaces.
        </Paragraph>
        <Paragraph>
          On the backend, I am proficient in Node.js, Express.js, and Golang,
          where I build robust and scalable solutions. I work with databases
          such as MongoDB and PostgreSQL, and I am experienced in using Docker
          and AWS for efficient deployment and application management.
          Additionally, my knowledge of Redis and Kafka helps in managing data
          and ensuring effective communication across systems.
        </Paragraph>
        <Paragraph>
          I constantly strive to write clean, elegant, and efficient code across
          the various programming languages I work with. Outside of coding, I
          enjoy playing games, spending time with friends, and exploring the
          beauty of life.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Wrap>
          <Tag padding={'0.5rem'}>JavaScript</Tag>
          <Tag padding={'0.5rem'}>TypeScript</Tag>
          <Tag padding={'0.5rem'}>React.js</Tag>
          <Tag padding={'0.5rem'}>Next.js</Tag>
          <Tag padding={'0.5rem'}>Node.js</Tag>
          <Tag padding={'0.5rem'}>Expres.js</Tag>
          <Tag padding={'0.5rem'}>Golang</Tag>
          <Tag padding={'0.5rem'}>Solidity</Tag>
          <Tag padding={'0.5rem'}>Ethers.js</Tag>
          <Tag padding={'0.5rem'}>Truffle</Tag>
          <Tag padding={'0.5rem'}>Inter Planetary File System</Tag>
          <Tag padding={'0.5rem'}>Redis</Tag>
          <Tag padding={'0.5rem'}>Kafka</Tag>
          <Tag padding={'0.5rem'}>MongoDB</Tag>
          <Tag padding={'0.5rem'}>Postgress SQL</Tag>
          <Tag padding={'0.5rem'}>Docker</Tag>
          <Tag padding={'0.5rem'}>AWS</Tag>
        </Wrap>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/okyash007" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @okyash007
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/okyash007/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Yash Verma
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
