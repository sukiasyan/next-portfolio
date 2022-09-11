import {
  Button,
  Container,
  Heading,
  Box,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        mb={6}
        p={3}
        align="center"
      >
        Hello
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hakob Sukiasyan
          </Heading>
          <p>Frontend developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Paragraph ParagraphParagraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph
          Paragraph Paragraph Paragraph
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1974</BioYear>
            Born in Yerevan, Armenia
          </BioSection>
          <BioSection>
            <BioYear>1996</BioYear>
            Completed State Engenering uni yerevan
          </BioSection>
        </Section>
      </Section>
    </Container>
  )
}

export default Page
