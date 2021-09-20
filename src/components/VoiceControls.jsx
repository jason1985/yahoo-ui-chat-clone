import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  background-color: #c0bfc0;
  user-select: none;
  justify-content: space-between;
  padding: 3px 10px;
  padding-top: 5px;
`

const AudioBox = styled.div`
  height: 27px;
  width: 68px;
  border: solid 3.5px #595a61;
  background-color: #c0bfc0;
`

const VolumeInputSlider = styled.input`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  background: #ff000000;
  outline: none;
  margin: 0;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 11px;
    height: 24px;
    background: #8e8e8c;
    border: 1px solid #ebebe8;
    cursor: pointer;
    z-index: 1;
  }
`
const VolumeSliderWrap = styled.div`
  position: relative;
  width: 76px;
  height: 24px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`
const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Divider = styled.div`
  border-left: 2px solid rgb(151 152 152);
  margin: 0 6px;
  height: 40px;
`

const TalkButton = styled.button`
  background-color: ${(props) => (props.clicked ? '#00c710' : '#56a05b')};
  border: 3px solid #c0bfc0;
  border-top: 3px solid #c0bfc0;
  border-bottom: 3px solid #c0bfc0;
  width: 71px;
  height: 30px;
  font-size: medium;
  font-weight: 700;
  box-shadow: 1px 1px 1px 1px #000000;
  cursor: pointer;
  margin-right: 75px;
`

const VolumeSlider = styled.div`
  width: 0;
  height: 0;
  border-left: ${(props) => (props.volumeInput / 100) * 76}px solid transparent;
  border-bottom: ${(props) => (props.volumeInput / 100) * 24}px solid #13cd22;
  position: absolute;
  bottom: 0;
  left: 0;
`

function VoiceControls() {
  const [clicked, setClicked] = useState(false)
  const [volumeInput, setVolumeInput] = useState(50)

  return (
    <Wrapper>
      <Left>
        <input type="checkbox" />
        &nbsp;&nbsp;Hands Free&nbsp;&nbsp;
        <TalkButton
          clicked={clicked}
          onMouseDown={() => setClicked(true)}
          onMouseUp={() => setClicked(false)}
          onMouseOut={() => setClicked(false)}
        >
          Talk
        </TalkButton>
        <AudioBox />
        <Divider />
        <AudioBox />
      </Left>
      <Right>
        <input type="checkbox" />
        &nbsp;&nbsp;Mute&nbsp;&nbsp;
        <VolumeSliderWrap>
          <VolumeInputSlider
            type="range"
            min="1"
            max="100"
            onChange={(e) => setVolumeInput(e.target.value)}
          />
          <VolumeSlider volumeInput={volumeInput} />
        </VolumeSliderWrap>
      </Right>
    </Wrapper>
  )
}

export default VoiceControls
