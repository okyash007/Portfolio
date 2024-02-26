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
          Hello! 👋 I am Yash Verma a 4th year undergrad at Jaypee Institute of
          Information Technology, Noida, UP. I enjoy taking complex problems and
          turning them into simple and beautiful webpages, I also love the logic
          and structure of coding and always strive to write elegant and
          efficient code whether it be C++, Python, HTML, CSS or JavaScript.
          <br></br>
          When I'm not coding, you'll find me playing games, hanging out with my
          friends and exploring the beauty of life.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Wrap>
          <Tag padding={"0.5rem"}>JavaScript</Tag>
          <Tag padding={"0.5rem"}>TypeScript</Tag>
          <Tag padding={"0.5rem"}>tailwindcss</Tag>
          <Tag padding={"0.5rem"}>chakra UI</Tag>
          <Tag padding={"0.5rem"}>Framer Motion</Tag>
          <Tag padding={"0.5rem"}>React.js</Tag>
          <Tag padding={"0.5rem"}>Next.js</Tag>
          <Tag padding={"0.5rem"}>Three.js</Tag>
          <Tag padding={"0.5rem"}>Redux</Tag>
          <Tag padding={"0.5rem"}>Recoil</Tag>
          <Tag padding={"0.5rem"}>Node.js</Tag>
          <Tag padding={"0.5rem"}>Expres.js</Tag>
          <Tag padding={"0.5rem"}>Prisma</Tag>
          <Tag padding={"0.5rem"}>MongoDB</Tag>
          <Tag padding={"0.5rem"}>Postgress SQL</Tag>
          <Tag padding={"0.5rem"}>Docker</Tag>
        </Wrap>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Projects
            </Button>
          </NextLink>
        </Box>
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
          <ListItem>
            <Link href="https://www.behance.net/be_a_dazzler" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoBehance />}
              >
                @DazZlEr
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink
            href="https://drive.google.com/file/d/1IAah0-Heh_f3gWIHOWhqbJv2SnBLBnQf/view?usp=sharing"
            passHref
            scroll={false}
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              <a href="https://drive.google.com/file/d/1IAah0-Heh_f3gWIHOWhqbJv2SnBLBnQf/view?usp=sharing">
                Download Resume
              </a>
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
