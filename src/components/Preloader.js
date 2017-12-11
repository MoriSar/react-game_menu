import React from 'react'
import pure from 'recompose/pure'
import '../styles/preloader-styles.css'

function Preloader() {
  return (
    <div className="preloader-container">
      <div className="banner">
        LOADING
        <div className="banner-left" />
        <div className="banner-right" />
      </div>
    </div>
  )
}

export default pure(Preloader)
