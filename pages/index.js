import {
    Image,
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
  } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
 
const Page = () => {
  return (
      <Layout>
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a full stack developer based in India !
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Akshay Raja Reddy
          </Heading>
          <p> Digital Craftsman (Artist / Developer / Designer)</p>
        </Box>
        <Box 
            flexShrink={0}
            mt={{ base: 4, md: 0}}
            ml={{ md: 6}}
            align="center"        
        >
            <Image 
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/BrownBatman.jpg"
                alt="Profile Image"
            />
        </Box>
      </Box>
      <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
              Work
          </Heading>
          <Paragraph>
          I am a full-stack developer with a passion 
          for building digital experiences I want. I like to think that I've got a knack for all things 
          launching products, from planning and designing all the way to solving real-life problems 
          with code. When not online, I love hanging out with my art supplies. Currently, I'm exploring 
          all things Web3 hoping to leave my footprint wherever possible. Reach out to me on any of my
          socials below if you want to say Hi 👋.
          </Paragraph>
          <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
            Bio
        </Heading>
        <BioSection>
            <BioYear>
                1998
            </BioYear>
            Born in Hyderabad, India
        </BioSection>
        <BioSection>
            <BioYear>
                2019
            </BioYear>
            Worked as a Software Engineering Intern at <NextLink href="https://www.boeing.com/" passHref>
            <Link target="_blank">Boeing</Link>
          </NextLink>
        </BioSection>
        <BioSection>
            <BioYear>
                2020
            </BioYear>
            Graduated as a Bachelor of Engineering from RVCE, Bangalore
        </BioSection>
        <BioSection>
            <BioYear>
                2020 - Present
            </BioYear>
            Working at
            <NextLink href="https://www.epsilon.com/us" passHref>
            <Link target="_blank"> Epsilon</Link>
          </NextLink> as Software Development Engineeer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        Dogs, Art, Music, Story-telling
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

    
      </Section>
    </Container>
    </Layout>
  )
}            
export default Page
