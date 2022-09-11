import {Container, Heading,Box} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
    <Box borderRadius='lg' bg='red' mb={6} p={3} align="center">Hello</Box>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hakob Sukiasyan
          </Heading>
          <p>Frontend developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page