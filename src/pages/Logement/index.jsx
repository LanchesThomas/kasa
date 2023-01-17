import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import LogementsData from '../../datas/logements.json'
import styled from 'styled-components'
import resolution from '../../utils/resolution'
import Profil from '../../components/Logement-Page/profil'
import Place from '../../components/Logement-Page/place'
import Stars from '../../components/Logement-Page/stars'
import CoverImg from '../../components/Logement-Page/cover-image'
import AboutDropdown from '../../components/AboutDropdown/'

const Logement = () => {
  const { id } = useParams()
  const logement = LogementsData.find((logement) => logement.id === id)
  const {
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = logement

  const MainDiv = styled.main`
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  position relative;
  margin-bottom: 100px;
  `

  const ContentDiv = styled.div`
    @media only screen and (min-width: ${resolution.medium}) {
      display: flex;
    }
  `

  const UserDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    @media only screen and (min-width: ${resolution.medium}) {
      width: 50%;
      align-items: flex-start;
      flex-direction: column-reverse;
    }
  `

  const AboutDiv = styled.div`
    @media only screen and (min-width: ${resolution.medium}) {
      display: flex;
      gap: 30px;
    }
  `

  const ListEquipments = styled.li`
    list-style: none;
  `

  return (
    <div>
      <Header />
      <MainDiv>
        <CoverImg pictures={pictures} />
        <ContentDiv>
          <Place id={id} title={title} location={location} tags={tags} />
          <UserDiv>
            <Stars rating={rating}/>
            <Profil host={host} />
          </UserDiv>
        </ContentDiv>
        <AboutDiv>
          <AboutDropdown title={'Description'} content={description} />
          <AboutDropdown
            title={'Equipements'}
            content={equipments.map((equipment) => (
              <ListEquipments key={`${equipment}-${id}`}>{equipment}</ListEquipments>
            ))}
          />
        </AboutDiv>
      </MainDiv>
      <Footer />
    </div>
  )
}

export default Logement
