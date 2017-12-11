import React from 'react'
// import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import '../styles/menu-styles.css'

function Menu({ state, changeVersion, switchProject, findInputChange }) {
  const { gameList } = state.mainMenu.staticData
  const { showingGame, currentProject } = state.mainMenu.gameFilter
  return (
    <menu className="Menu col-5 row d-flex justify-content-around">
      <div className="filter col">
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">
            Find
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Game or ID"
            aria-label="Game or ID"
            aria-describedby="basic-addon1"
            onChange={findInputChange}
          />
        </div>
      </div>
      <div className="countOfGames col-12 row">
        <div className="allGames col">
          <p>Count of all games: {gameList.length}</p>
        </div>
        <div className="currentGames col">
          <p>Founded games: {showingGame.length}</p>
        </div>
      </div>
      <div className="project-buttons col-12 row justify-content-around" data-current_project={currentProject}>
        <button type="button" className="btn btn-secondary" data-value="type_1" onClick={switchProject}>
          Type 1
        </button>
        <button type="button" className="btn btn-secondary" data-value="type_2" onClick={switchProject}>
          Type 2
        </button>
      </div>
    </menu>
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

export default pure(Menu)
