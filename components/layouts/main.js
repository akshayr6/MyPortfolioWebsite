import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Akshay's homepage" />
        <meta name="author" content="Akshay Raja Reddy" />
        <meta name="author" content="Akshay" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Akshay Raja Reddy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@akshayr6" />
        <meta name="twitter:creator" content="@akshayr6" />
        <meta property="og:site_name" content="Akshay Raja Reddy" />
        <meta name="og:title" content="Akshay Raja Reddy" />
        <meta property="og:type" content="website" />
        <title>Akshay Raja Reddy - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main