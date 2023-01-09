import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Fake Face Classifier">
    <Container>
      <Title>
        Home Rentals <Badge>2022</Badge>
      </Title>
      <P>
      A social web application based on firebase api. 
      </P>
      <br></br>
      <P>
      Anyone can sgin in with google accounts and can register a house on the website. With the help of google firebase API. 
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/okyash007/Rent-Home">
          Reant-home<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://github.com/okyash007/Rent-Home">
          Reant-home.vercel.app<ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/RHhome.png" alt="fakeface" />
      <WorkImage src="/images/works/RH1.png" alt="fakeface" />
      <WorkImage src="/images/works/RH2.png" alt="fakeface" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
