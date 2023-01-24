import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import resolution from '../../utils/resolution'
import RightArrowImg from '../../assets/right-arrow.png'
import RightArrowSmImg from '../../assets/right-arrow-sm.png'
import LeftArrowImg from '../../assets/left-arrow.png'
import LeftArrowSmImg from '../../assets/left-arrow-sm.png'
import { fadeIn } from '../../utils/animation'
import { useWindowSize } from '../../utils/hooks'

const CoverDiv = styled.div`
  position: relative;
  animation: ${fadeIn} 0.2s;
  & .slide {
    display: none;
  }

  & .slide__active {
  }

  & .arrow-hide {
    display: none;
  }
  & .arrow {
    cursor: pointer;
  }
`

const Cover = styled.img`
  animation: ${fadeIn} 0.4s;
  width: 100%;
  height: 255px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
  @media only screen and (min-width: ${resolution.medium}) {
    height: 415px;
  }
`
const RightArrow = styled.img`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0%, -50%);
`
const LeftArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(0%, -50%);
`

const PicturesCount = styled.p`
  display: none;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 30px;
  color: white;
  @media only screen and (min-width: ${resolution.medium}) {
    display: inline;
  }
`

const CoverImg = ({ pictures, id }) => {
  const [visible, setVisible] = useState(0)
  const length = pictures.length
  const [isLarge, setIsLarge] = useState(false)
  const screenWidth = useWindowSize().width

  useEffect(() => {
    if (screenWidth >= 769) {
      setIsLarge(true)
    } else {
      setIsLarge(false)
    }
  }, [screenWidth])

  function nextSlide() {
    setVisible(visible >= length - 1 ? 0 : visible + 1)
  }

  function prevSlide() {
    setVisible(visible <= 0 ? length - 1 : visible - 1)
  }

  return (
    <CoverDiv>
      {pictures.map((picture, index) => (
        <div key={`image- ${index}`}>
          <Cover
            src={picture}
            className={index === visible ? 'slide__active' : 'slide'}
          />
        </div>
      ))}
      <RightArrow
        key={`rightarrow-${id}`}
        src={isLarge ? RightArrowImg : RightArrowSmImg}
        onClick={nextSlide}
        className={length <= 1 ? 'arrow-hide' : 'arrow'}
      />
      <LeftArrow
        key={`leftarrow-${id}`}
        src={isLarge ? LeftArrowImg : LeftArrowSmImg}
        onClick={prevSlide}
        className={length <= 1 ? 'arrow-hide' : 'arrow'}
      />
      <PicturesCount>{`${visible + 1} / ${length}`}</PicturesCount>
    </CoverDiv>
  )
}

export default CoverImg
