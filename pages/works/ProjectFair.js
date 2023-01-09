import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Adulting 101">
    <Container>
      <Title>
        ProJect Fair <Badge>2022</Badge>
      </Title>
      <P>
        A React web app Where anyone can manage projects. It uses firebase api
        to store the data of a particular person. It also includes a cool
        landing page and has a sgin up and login option. I made it using
        ReactJS.
      </P>
      <br></br>
      Sync with email so u can also upload your projects.
      <P></P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/okyash007/Project-fair">
            Project-Fair <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://okyash007-projectfair.vercel.app/">
            Project-Fair.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>
      <WorkImage src="/images/works/PFhome.png" alt="adulting101" />
      <WorkImage src="/images/works/PF1.png" alt="adulting101" />
      <WorkImage src="/images/works/PF2.png" alt="adulting101" />
      <WorkImage src="/images/works/PF3.png" alt="adulting101" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
