import React from 'react'
import { MainMenuContainer } from 'containers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

function Routes() {
  return (
    <Router>
      <Container>
        <Route path="/" component={MainMenuContainer} />
      </Container>
    </Router>
  )
}

export default Routes
