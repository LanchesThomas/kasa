import React from 'react'
import styled from 'styled-components'
import resolution from '../../utils/resolution'
import colors from '../../utils/colors'

const PlaceDiv = styled.div`
  @media only screen and (min-width: ${resolution.medium}) {
    width: 75%;
  }
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  color: ${colors.primary};
  width: 100%;
  margin-bottom: 10px;
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 36px;
    width: 100%;
  }
`

const Location = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 142.6%;
  color: ${colors.primary};
  margin-bottom: 10px;
  display: inline-block;
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 18px;
  }
`
const TagsUl = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  @media only screen and (min-width: ${resolution.medium}) {
    width: 100%;
  }
`

const Tags = styled.li`
  list-style: none;
  font-weight: 500;
  font-size: 10px;
  line-height: 142.6%;
  background: #ff6060;
  border-radius: 5px;
  padding: 3px 6px;
  display: flex;
  align-items: center;
  color: #ffffff;
  @media only screen and (min-width: ${resolution.medium}) {
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 10px;
  }
`

const Place = ({ title, location, tags, id }) => {
  return (
    <PlaceDiv>
      <Title>{title}</Title>
      <Location>{location}</Location>
      <TagsUl>
        {tags.map((tag) => (
          <Tags key={`${tag}-${id}`}>{tag}</Tags>
        ))}
      </TagsUl>
    </PlaceDiv>
  )
}

export default Place
