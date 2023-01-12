import React from 'react'
import styled from 'styled-components'
import AboutImg from '../../assets/about-picture.jpg'

const AboutPictureDiv = styled.div`
  width: 100%;
  margin: 20px auto;
  height: 223px;
`

const AboutPictureImg = styled.img`
  background-blend-mode: darken;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%;
  border-radius: 10px;
`

const AboutPicture = () => {
  return (
    <AboutPictureDiv>
      <AboutPictureImg src={AboutImg} />
    </AboutPictureDiv>
  )
}

export default AboutPicture
