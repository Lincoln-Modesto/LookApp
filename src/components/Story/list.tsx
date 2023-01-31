import Story from "."
import { Box, ScrollView, Text } from ".."

const StoryList = () => {
  return (
    <Box fluid>
      <Box row fluid justify="space-between" hasPadding height="60px">
        <Text bold color="dark">Stories</Text>
        <Text color="danger" underline>Show All</Text>
      </Box>
      <ScrollView horizontal style={{ paddingLeft: 20 }}>
        {Array.from(Array(10))?.map(item => (<Story/>))}
      </ScrollView>
    </Box>
  )
}

export default StoryList