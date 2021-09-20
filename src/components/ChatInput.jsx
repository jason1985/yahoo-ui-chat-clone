import { useState } from 'react'
import styled from 'styled-components'

const ChatInputContainer = styled.div`
  height: 80px;
  background-color: #c0bfc0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 5px;
`
const ChatTextarea = styled.textarea`
  width: 85%;
  resize: none;
`
const ChatButton = styled.button`
  background-color: #c0bfc0;
  color: ${(props) => (props.text ? 'black' : '#7d7c7d')};
  font-size: medium;
  width: 12%;
  border: solid 2px black;
  cursor: pointer;
`

function ChatInput() {
  const [text, setText] = useState('')

  const listenForEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setText('')
    }
  }

  return (
    <ChatInputContainer>
      <ChatTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => listenForEnter(e)}
      />
      <ChatButton text={text} onClick={() => setText('')}>
        Send
      </ChatButton>
    </ChatInputContainer>
  )
}

export default ChatInput
