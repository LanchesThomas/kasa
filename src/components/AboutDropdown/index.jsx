import styled from 'styled-components'
import DownArrow from '../../assets/down-arrow.png'
import { useEffect, useState } from 'react'
import resolution from '../../utils/resolution'
import DownArrowSm from '../../assets/down-arrow-sm.png'
import { useWindowSize } from '../../utils/hooks'

const AboutDropdownDiv = styled.div`
  width: 100%;
  border: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
  gap: 30px;
  transition: all 300ms
  @media only screen and (min-width: ${resolution.large}) {
    margin: 45px 0px;
  }
`
const DropdownWord = styled.div`
  width: 100%;
  border-radius: 5px;
  background: #ff6060;
  position: relative;
  display: flex;
  align-items: center;
`

const DropdownTitle = styled.h2`
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  position: relative;
  @media only screen and (min-width: ${resolution.large}) {
    font-size: 24px;
    height: 47px;
  }
`

const DownArrowImg = styled.img`
  padding: 10px;
  transform: rotate(180deg);
  transition: transform 300ms;
`

const DropdownContentDiv = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin-top: -40px;
  z-index: -1;
  border: 2px solid red;
  transition: padding 300ms;
`

const DropdownContentText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 142.6%;
  color: #ff6060;
  @media only screen and (min-width: ${resolution.large}) {
    font-size: 24px;
  }
`

const AboutDropdown = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)
  const [isRotate, setIsRotate] = useState('0deg')
  const [isLarge, setIsLarge] = useState(false)
  const screenWidth = useWindowSize().width

  function toggleFunction() {
    setIsActive(!isActive)
  }

  // arrow size according to screen width
  useEffect(() => {
    if (screenWidth >= 1025) {
      setIsLarge(true)
      console.log(isLarge)
    } else {
      setIsLarge(false)
      console.log(isLarge)
    }
  }, [screenWidth])

  // arrow rotation
  useEffect(() => {
    const arrow = document.querySelector(`.${title}`)
    if (isActive) {
      setIsRotate('0deg')
      arrow.style.transform = `rotate(${isRotate})`
    } else {
      setIsRotate('180deg')
      arrow.style.transform = `rotate(${isRotate})`
    }
  }, [isActive])

  return (
    <AboutDropdownDiv>
      <DropdownWord onClick={toggleFunction}>
        <DropdownTitle>{title}</DropdownTitle>
        <DownArrowImg
          src={isLarge ? DownArrow : DownArrowSm}
          className={title}
        />
      </DropdownWord>
      {isActive && (
        <DropdownContentDiv>
          <DropdownContentText>{content}</DropdownContentText>
        </DropdownContentDiv>
      )}
    </AboutDropdownDiv>
  )
}

export default AboutDropdown
