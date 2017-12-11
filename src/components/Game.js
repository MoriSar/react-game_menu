import React from 'react'
// import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import '../styles/game-styles.css'

function setupGameLogo(logoUrl) {
  return {
    backgroundImage: `url(${logoUrl})`,
  }
}

function showHideInfo(event) {
  const overlay = event.currentTarget
  overlay.classList.contains('show') ? overlay.classList.remove('show') : overlay.classList.add('show')
}

function Game({ state, playProdClick, playDevClick }) {
  const { showingGame, currentProject } = state.mainMenu.gameFilter
  return (
    <div className="Game" data-current_project={currentProject}>
      <div className="game-subtypes col" />
      <div className="game-list row">
        {showingGame.map((item, key) => (
          <div
            key={key}
            className="game-item"
            data-isundercore={item.isUnderCore}
            data-isdone={item.status}
            data-gametype={item.type}
            data-gamesubtype={item.subtype}
            data-rating={item.rating}
          >
            <div className="game-content">
              <div className="game-logo" style={setupGameLogo(item.img)} />
              <div className="info">
                <p>{item.name}</p>
              </div>
              <div className="overlay" onClick={showHideInfo}>
                <p className="game-id">Game ID: {item.id}</p>
                <p className="game-authors">Authors: {item.authors.map(author => author)}</p>
                <p className="game-versions">
                  Start version:<br />
                  <span className="game-version">
                    {item.versions.map((version, key) => {
                      return (
                        <button
                          type="button"
                          className="btn btn-dark"
                          key={key}
                          onClick={playDevClick}
                          data-value={version}
                          data-id={item.id}
                        >
                          {version}
                        </button>
                      )
                    })}
                  </span>
                </p>
                <div className="game-buttons-parent">
                  <button type="button" className="btn btn-light game-button" onClick={playProdClick} data-id={item.id}>
                    Start Prod
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
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

export default pure(Game)
