import { Box, Title, Touchable } from ".."
import { SafeAreaView, StatusBar } from "react-native"
import { colors } from '../../styles/theme.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box fluid height="90px" justify="center" border={`1px solid ${colors.muted}50`}>
        <SafeAreaView style={{ flexDirection: "row" }}>
          <Touchable width="80px" align="center" justify="center">
            <Icon name="menu" size={20} />
          </Touchable>
          <Box align="center" justify="center">
            <Title>{props.title}</Title>
          </Box>
          <Box width="80px"></Box>
        </SafeAreaView>
      </Box>
    </>
  )
}

export default Header