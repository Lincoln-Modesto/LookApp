import { Touchable, Text, Cover } from ".."

const Story = () => {
  return (
    <>
      <Touchable
        background="black"
        height="190px"
        radius="10px"
        spacing="0px 10px 0px"
        width="150px">
        <Cover image="https://images.news.iu.edu/dams/is4wumk2hf_w768.jpg" width="100%" height="100%"/>
      </Touchable>
    </>
  )
}

export default Story