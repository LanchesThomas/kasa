import styled from 'styled-components'
import DownArrow from '../../assets/down-arrow.png'

const AboutDropdownDiv = styled.div`
  width: 100%;
  border: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const DropdownWord = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background: #ff6060;
  position: relative;
`

const DropdownTitle = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 12px;
`

const DownArrowImg = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0%, -50%);
`

const AboutDropdown = () => {
  return (
    <AboutDropdownDiv>
      <DropdownWord>
        <DropdownTitle>Fiabilité</DropdownTitle>
        <DownArrowImg src={DownArrow} />
      </DropdownWord>
      <DropdownWord>
        <DropdownTitle>Respect</DropdownTitle>
        <DownArrowImg src={DownArrow} />
      </DropdownWord>
      <DropdownWord>
        <DropdownTitle>Service</DropdownTitle>
        <DownArrowImg src={DownArrow} />
      </DropdownWord>
      <DropdownWord>
        <DropdownTitle>Sécurité</DropdownTitle>
        <DownArrowImg src={DownArrow} />
      </DropdownWord>
    </AboutDropdownDiv>
  )
}

export default AboutDropdown
