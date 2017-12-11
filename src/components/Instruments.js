import React from 'react'
// import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import '../styles/instruments-styles.css'

function Instruments({ showInfoBtnClick }) {
  const spriteGenUrl = 'common/tools/CssSpriteAnimate/index.htm'
  return (
    <div className="Instruments col-5">
      <p>Instruments</p>
      <div className="buttons d-flex justify-content-around">
        <button type="button" className="btn btn-secondary" onClick={showInfoBtnClick}>
          Info
        </button>
        <a href={spriteGenUrl} className="btn btn-secondary">
          Sprite Gen
        </a>
      </div>
    </div>
  )
}

/*
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}
*/

export default pure(Instruments)
