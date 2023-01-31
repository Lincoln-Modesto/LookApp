import { Box, Text, Title, Spacer, Button, Input } from "../../components"
import { StatusBar } from "react-native"

const SignUp: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <Box background="light" justify="center" align="center" hasPadding>
        <Title bold>Create new account.</Title>
        <Spacer />
        <Text>Enter yout details below:</Text>

        <Spacer/>
        <Input placeholder="Name"/>
        <Spacer/>
        <Input placeholder="E-mail"/>
        <Spacer/>
        <Input placeholder="Password" secureTextEntry/>
        <Spacer size="30px"/>

        <Button block>
          <Text color="light">Create new account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline>
          Back to signIn
        </Text>
      </Box>
    </>
  )
}

export default SignUp