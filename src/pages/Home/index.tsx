import { Title, Text, Box, Spacer, Button } from '../../components'
import { StatusBar } from "react-native"

const Home: React.FC = () => {

  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <Box justify='center' hasPadding align='center' background='dark'>
        <Box justify='center' align='center' fluid>
          <Title color='light' variant='big' bold>LOOKAPP</Title>
          <Spacer />
          <Text align='center' color='light' spacing='0px 40px'>Stay on top of the fashion world and buy your favorite looks.</Text>
        </Box>

        <Box justify='flex-end' align='center' fluid>
          <Button block>
            <Text color='light'>Sign my account</Text>
          </Button>
          <Spacer size='20px' />
          <Text underline color="light">Create new account</Text>
        </Box>
        <Spacer size='70px' />
      </Box>
    </>
  )
}

export default Home