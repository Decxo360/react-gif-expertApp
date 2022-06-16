import React from 'react'
import PropTypes from "prop-types"

export const GifGridItem = ({title,url}) => {
  return (
    <div className='card animate__animated animate__bounce'>
        <img src={url} alt={title}></img>
        <h3>{title}</h3>
    </div>
  )
}
GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}