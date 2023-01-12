import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import LogementsData from '../../datas/logements.json'

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

  return (
    <div>
      <Header />
      coucou {title}
    </div>
  )
}

export default Logement
