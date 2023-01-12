import HomePicturePhoto from '../../assets/home-picture.png'
import styled from 'styled-components'
import resolution from '../../utils/resolution'

const HomePictureDiv = styled.div`
  margin: 20px auto;
  width: 90%;
  height: 111px;
  border-radius: 10px;
  position: relative;
  @media only screen and (min-width: ${resolution.large}) {
    height: 223px;
  }
`
const HomePictureImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  filter: contrast(70%);
  mix-blend-mode: darken;
`

const HomePictureText = styled.p`
  position: absolute;
  left: 9.6%;
  right: 32.53%;
  top: 14.04%;
  bottom: 80.05%;
  font-weight: 500;
  font-size: 24px;
  color: white;
  width: 80%;
  @media only screen and (min-width: ${resolution.medium}) {
    display: none;
  }
`

const HomePictureTextLg = styled.p`
  display: none;
  @media only screen and (min-width: ${resolution.medium}) {
    display: inline;
    position: absolute;
    left: 9.6%;
    right: 32.53%;
    top: 14.04%;
    bottom: 80.05%;
    font-weight: 500;
    font-size: 24px;
    color: white;
    width: 80%;
  }
  @media only screen and (min-width: ${resolution.large}) {
    left: 0%;
    top: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
`

const HomePicture = () => {
  return (
    <HomePictureDiv>
      <HomePictureImg src={HomePicturePhoto} />
      <HomePictureText>
        Chez vous,
        <br /> partout et ailleurs
      </HomePictureText>
      <HomePictureTextLg>Chez vous, partout et ailleurs</HomePictureTextLg>
    </HomePictureDiv>
  )
}

export default HomePicture
