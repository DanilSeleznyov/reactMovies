import React from 'react'
import { Link } from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'
import Button from '../button/Button'
import './movie-card.scss'
import apiConfig from '../../api/apiConfig'
import { category } from '../../api/tmdbApi'

const MovieCard = (props) => {

  const link = '/'+category[props.category]+'/'+props.id

  const bg = apiConfig.w500Image(props.poster_path || props.backdrop_path)

  return (
    <Link to={link}>
        <div className="movie__card" style={{backgroundImage: `url(${bg})`}}>
            <Button>
                <FaPlay/>
            </Button>

        </div>
        <h3>{props.title || props.name}</h3>
    </Link>
  )
}

export default MovieCard