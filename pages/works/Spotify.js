import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Hand Gesture Recognition">
    <Container>
      <Title>
      Spotify <Badge>2021</Badge>
      </Title>
      <P>
      A Spotify Clone made with help of Spotify Web API, react-spotify-web-playback and styled component with React. Sync with Spotify means you can play music on mobile or application and its starts playing on the website
      </P>
      <br></br>
      <P>
      User playlists listed here they can play any song from their playlist or they can search artist, songs, or podcast.
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Vishwas-10/Hand-Gesture-Recognition">
          Spotify<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Vishwas-10/Hand-Gesture-Recognition">
          Spotify.vercel.app<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows,MacOS,Linux,Raspberry pi</span>
        </ListItem>
        
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/Shome.png" alt="handgesture" />
      <WorkImage src="/images/works/S1.png" alt="handgesture" />
      <WorkImage src="/images/works/S2.png" alt="handgesture" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
