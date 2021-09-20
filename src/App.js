import styled from 'styled-components'
import VoiceControls from './components/VoiceControls'
import ChatInput from './components/ChatInput'
import BackgroundImg from './images/98.png'

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundImg});
  background-size: cover;
`

const Chatroom = styled.div`
  border: solid 4px #c0bfc0;
  background-color: #c0bfc0;
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
`

const Titlebar = styled.div`
  height: 30px;
  background-color: #040989;
  color: white;
  display: flex;
  padding: 0 5px;
  font: bold;
  align-items: center;
  user-select: none;
`
const FileControls = styled.div`
  height: 34px;
  background-color: #c0bfc0;
  padding: 0 5px;
  display: flex;
  align-items: center;
  user-select: none;
`
const ChatDisplay = styled.div`
  height: 100%;
  background-color: #c0bfc0;
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  margin-right: 5px;
`

const ChatText = styled.div`
  height: 100%;
  width: 70%;
  background-color: white;
  margin-right: 8px;
  border: solid 2px black;
  overflow-y: scroll;
`
const UserList = styled.div`
  height: 100%;
  width: 30%;
  background-color: white;
  border: solid 2px black;
`
const ChatroomWrapper = styled.div`
  border: solid 1px black;
  overflow: hidden;
`

const FileControlsText = () => {
  return (
    <FileControls>
      <u>F</u>ile&nbsp;&nbsp;<u>E</u>dit&nbsp;&nbsp;<u>V</u>
      iew&nbsp;&nbsp;F<u>r</u>iend&nbsp;&nbsp;Forma<u>t</u>&nbsp;&nbsp;
      <u>H</u>elp
    </FileControls>
  )
}

function App() {
  return (
    <AppWrapper>
      <ChatroomWrapper>
        <Chatroom>
          <Titlebar>Jason's Room:1 -- Chat</Titlebar>
          <FileControlsText />
          <ChatDisplay>
            <ChatText />
            <UserList />
          </ChatDisplay>
          <VoiceControls />
          <ChatInput />
        </Chatroom>
      </ChatroomWrapper>
    </AppWrapper>
  )
}

export default App
