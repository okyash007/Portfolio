import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout title="Canteen Management System">
    <Container>
      <Title>
      Sorting Visualizer <Badge>2022-</Badge>
      </Title>
      <P>
      React web app Where you can visualize in bar graphical manner how actually a sorting algorithm works. It include various
sorting algorithms. I made it using, ReactJS and for styling i used Tailwind CSS
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/okyash007/sorting-visualizer">
          Sorting-Visualizer<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://okyash007-sorting.vercel.app/">
          sorting-visualizer.vercel.app<ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/SV1.png" alt="COMS" />
      <WorkImage src="/images/works/SV2.png" alt="COMS" />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
