import React from 'react'
// import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import '../styles/info-styles.css'

function Info({ state }) {
  const { versions, developers } = state.mainMenu.staticData
  const _developers = Object.entries(developers)
  return (
    <section className="Info">
      <table className="table">
        <thead>
          <tr>
            <th>Version</th>
            <th>Status</th>
            <th>Describe</th>
            <th>Docs</th>
          </tr>
        </thead>
        <tbody>
          {versions.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.value}</td>
                <td>{item.status}</td>
                <td>
                  {item.describe.map((i, k) => {
                    return (
                      <span key={k}>
                        - {i};<br />
                      </span>
                    )
                  })}
                </td>
                <td>
                  <a href={item.docs} className="btn btn-info">
                    Open
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <table className="table">
        <thead>
          <tr>
            <th>Developer</th>
            <th>Games</th>
            <th>Games count</th>
          </tr>
        </thead>
        <tbody>
          {_developers.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item[0]}</td>
                <td>
                  {item[1].id.map((i, k) => {
                    return `${i}; `
                  })}
                </td>
                <td>{item[1].id.length}</td>
              </tr>
            )
          })}
          {/*<tr>
                    <td>MobilSoft band</td>
                    <td>6;</td>
                    <td>9000;</td>
                </tr>*/}
        </tbody>
      </table>
    </section>
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

export default pure(Info)
