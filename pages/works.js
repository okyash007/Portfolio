import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images/works/SVhome.png'
import thumbadulting101 from '../public/images/works/PFhome.png'
import thumbFakeFace from '../public/images/works/RHhome.png'
import thumbHandGesture from '../public/images/works/Shome.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid>
        <Section>
          <WorkGridItem
            title="Sorting Visualizer"
            thumbnail={thumbComs}
          >
            Visualize in bar graphical manner how
            actually a sorting algorithm works.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            title="Project Fair"
            thumbnail={thumbadulting101}
          >
            A React web app Where anyone can manage projects.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            title="Home Rentals"
            thumbnail={thumbFakeFace}
          >
            A Machine Learning model using CNN to classify fake images generted
            using Generative Adversarial Networks (GANs).
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Spotify"
            thumbnail={thumbHandGesture}
            title="Spotify"
          >
            A machine learning Model that will Recognize Hand Gestures in real
            time using CNN and automated using Raspberry pi.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
