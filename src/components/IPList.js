import React from 'react'
// import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import '../styles/ipList-styles.css'

function IPList({ state }) {
  const ipList = state.mainMenu.staticData.ipList
  return (
    <div className="IP col-12">
      <div className="items row">
        {ipList.map((item, index) => (
          <a
            href={item.href}
            className="ip-item btn btn-secondary col"
            key={index}
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {item.developer}:
            {item.ipKey}
          </a>
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

export default pure(IPList)
