import React from 'react'
// import PropTypes from 'prop-types'
import { Menu, IPList, Game, Preloader, Instruments, Info } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MenuActions from 'actions/menu'

const dataUrls = ['./data/gameList.json', './data/IPList.json', './data/versions.json']

class MainMenuContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.state
  }

  getData() {
    Promise.all(dataUrls.map(url => fetch(url).then(resp => resp.json()))).then(jsons => {
      this.props.getGameList({ json: jsons[0] })
      this.props.getIPList({ json: jsons[1] })
      this.props.getVersionsList({ json: jsons[2] })
      this.props.setPreloader({ preloaderStatus: false })
      this.props.setGamesToDevelopers()
    })
  }

  onChangeVersion = event => {
    this.props.changeVersion({ event })
  }
  onPlayDevBtnClick = event => {
    this.props.playDevBtnClick({ event })
  }
  onPlayProdBtnClick = event => {
    this.props.playProdBtnClick({ event })
  }
  onSwitchProject = event => {
    this.props.switchProject({ event })
  }
  onFindInputChange = event => {
    this.props.findInputChange({ event })
  }
  onShowInfoBtnClick = event => {
    this.props.showInfoBtnClick({ event })
  }

  componentDidMount() {
    this.props.setPreloader({ preloaderStatus: true })
    this.getData()
  }

  render() {
    const { preloaderStatus, showingInfo } = this.props.state.mainMenu
    return (
      <div className="App row" data-preloader_status={preloaderStatus} data-showing_info={showingInfo}>
        <Preloader />
        <header className="col-12">
          <div className="control-panel col row d-flex justify-content-around">
            <Menu
              state={this.props.state}
              changeVersion={this.onChangeVersion}
              switchProject={this.onSwitchProject}
              findInputChange={this.onFindInputChange}
            />
            <Instruments showInfoBtnClick={this.onShowInfoBtnClick} />
            <IPList state={this.props.state} />
          </div>
        </header>
        <section className="col-12 main-content">
          <main>
            <Game
              state={this.props.state}
              playProdClick={this.onPlayProdBtnClick}
              playDevClick={this.onPlayDevBtnClick}
            />
          </main>
        </section>
        <Info state={this.props.state} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  state: createSelector(state => state, taruri => taruri),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MenuActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuContainer)
