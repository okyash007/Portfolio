import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Wrap,
  Tag,
  Link,
  Button,
  Box
} from '@chakra-ui/react'
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
            id="notion"
            title="Notion but its cool"
            thumbnail={thumbComs}
          >
            Basicaly its notion but its based on serverless backend (cloudflare
            worker)
            <Wrap style={{ marginTop: '0.5rem' }}>
              <Tag>Next.js</Tag>
              <Tag>cloudflare</Tag>
              <Tag>Serverless backend</Tag>
              <Tag>TypeScript</Tag>
              <Tag>tailwind css</Tag>
            </Wrap>
            <Wrap>
              <Link href="https://github.com/okyash007/notion-frontend">
                code
              </Link>
              <Link href="https://notion-cool.vercel.app">
                live (no auth required you can use it diredtly)
              </Link>
            </Wrap>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pro-manage"
            title="Pro Manage"
            thumbnail={thumbadulting101}
          >
            Its a tasks management tool in which you can create tasks and
            checklists.
            <Wrap style={{ marginTop: '0.5rem' }}>
              <Tag>React.js</Tag>
              <Tag>MongoDB</Tag>
              <Tag>express</Tag>
              <Tag>Styled components</Tag>
            </Wrap>
            <Wrap>
              <Link href="https://github.com/okyash007/promanage-frontend">
                code
              </Link>
              <Link href="https://promanage-frontend.vercel.app">live</Link>
            </Wrap>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem title="Gitsta" thumbnail={thumbFakeFace}>
            A Sicoal Media aap where you can create posts and chat in realtime.
            <Wrap style={{ marginTop: '0.5rem' }}>
              <Tag>React.js</Tag>
              <Tag>postgressSQL</Tag>
              <Tag>prisma</Tag>
              <Tag>express</Tag>
              <Tag>tialwind</Tag>
              <Tag>Web Sockets</Tag>
            </Wrap>
            <Wrap>
              <Link href="https://github.com/okyash007/gitsta-frontend">
                code
              </Link>
              <Link href="https://gitsta-frontend.vercel.app">live</Link>
            </Wrap>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="tic-tac-toe"
            thumbnail={thumbHandGesture}
            title="tic-tac-toe"
          >
            A tic tac toe game which has 1v1 feature, you can also play with pc,
            you can have a look at winning logic{' '}
            <Link
              style={{ marginLeft: '3px' }}
              href="https://github.com/okyash007/tic-tac-toe/blob/main/src/helper.js#L5"
            >
              here
            </Link>
            <Wrap style={{ marginTop: '0.5rem' }}>
              <Tag>React.js</Tag>
              <Tag>MongoDB</Tag>
              <Tag>express</Tag>
              <Tag>Web Sockets</Tag>
            </Wrap>
            <Wrap>
              <Link href="https://github.com/okyash007/tic-tac-toe">code</Link>
              <Link href="https://tic-tac-toe-okyash007.vercel.app/">live</Link>
            </Wrap>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
