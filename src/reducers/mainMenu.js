import {
  SWITCH_PROJECT,
  FIND_INPUT_CHANGE,
  PLAY_DEV_BTN_CLICK,
  PLAY_PROD_BTN_CLICK,
  GET_GAME_LIST,
  GET_IP_LIST,
  GET_VERSIONS_LIST,
  SET_PRELOADER,
  SHOW_INFO_BNT_CLICK,
  SET_GAMES_TO_DEVELOPERS,
} from 'constants/ActionTypes'

const initialState = {
  staticData: {
    versions: [],
    gameList: [],
    ipList: [],
    pathToDev: 'html5',
    pathToProd: 'html5prod',
    developers: {},
  },
  gameFilter: {
    currentVersion: {},
    showingGame: [],
    currentProject: '',
    filterValue: '',
  },
  showingInfo: false,
  preloaderStatus: false,
}

function filterGameList(list, callback) {
  return list.filter(item => callback(item))
}

function getGameList(state, payload) {
  let gameList = payload.json
  const _staticData = state.staticData
  const _gameFilter = state.gameFilter
  return {
    ...state,
    staticData: {
      ..._staticData,
      gameList,
    },
    gameFilter: {
      ..._gameFilter,
      showingGame: gameList,
    },
  }
}

function getIPList(state, payload) {
  let ipList = payload.json
  const _staticData = state.staticData
  return {
    ...state,
    staticData: {
      ..._staticData,
      ipList,
    },
  }
}

function getVersionsList(state, payload) {
  let versions = payload.json
  const _staticData = state.staticData
  return {
    ...state,
    staticData: {
      ..._staticData,
      versions,
    },
  }
}

function startGame(state, data) {
  const homePage = window.location.href
  let gamePath = ''
  if (data.dataset.value) {
    gamePath = `${homePage}${state.staticData.pathToDev}/${data.dataset.id}/${data.dataset.value}/`
  } else {
    gamePath = `${homePage}${state.staticData.pathToProd}/${data.dataset.id}/`
  }
  window.location.href = gamePath
}

function onSwitchProject(state, payload) {
  const _gameFilter = state.gameFilter
  const button = payload.event.currentTarget
  const buttonValue = button.dataset.value
  let newValue = state.gameFilter.currentProject === buttonValue ? '' : buttonValue
  return {
    ...state,
    gameFilter: {
      ..._gameFilter,
      currentProject: newValue,
    },
  }
}

function onShowInfoBtnClick(state) {
  return {
    ...state,
    showingInfo: !state.showingInfo,
  }
}

function onFindInputChange(state, payload) {
  const _gameFilter = state.gameFilter
  let value = payload.event.currentTarget.value
  let typeOfValue = ''
  if (value) {
    typeOfValue = Number(value) ? 'id' : 'name'
  } else {
    value = ''
  }
  let _showingGame = filterGameList(state.staticData.gameList, item => {
    if (value) {
      if (typeOfValue === 'id') {
        if (String(item.id).includes(value)) {
          return item
        }
      } else if (typeOfValue === 'name') {
        if (String(item.name).includes(value)) {
          return item
        }
      }
    } else {
      return item
    }
  })
  return {
    ...state,
    gameFilter: {
      ..._gameFilter,
      showingGame: _showingGame,
    },
  }
}

function onPlayDevBtnClick(state, payload) {
  startGame(state, payload.event.currentTarget)
  return state
}

function onPlayProdBtnClick(state, payload) {
  startGame(state, payload.event.currentTarget)
  return state
}

function setPreloader(state, payload) {
  return {
    ...state,
    preloaderStatus: payload.preloaderStatus,
  }
}

function setGamesToDevelopers(state) {
  let authors = {}
  const _staticData = state.staticData
  state.staticData.gameList.forEach((item, key) => {
    item.authors.forEach((i, k) => {
      authors[i] = {
        id: [],
      }
    })
  })
  state.staticData.gameList.forEach((item, key) => {
    item.authors.forEach((i, k) => {
      authors[i].id.push(item.id)
    })
  })
  return {
    ...state,
    staticData: {
      ..._staticData,
      developers: authors,
    },
  }
}

export default function menu(state = initialState, action) {
  switch (action.type) {
    case SET_PRELOADER: {
      return setPreloader(state, action.payload)
    }
    case GET_GAME_LIST: {
      return getGameList(state, action.payload)
    }
    case GET_IP_LIST: {
      return getIPList(state, action.payload)
    }
    case GET_VERSIONS_LIST: {
      return getVersionsList(state, action.payload)
    }
    case SWITCH_PROJECT: {
      return onSwitchProject(state, action.payload)
    }
    case FIND_INPUT_CHANGE: {
      return onFindInputChange(state, action.payload)
    }
    case PLAY_DEV_BTN_CLICK: {
      return onPlayDevBtnClick(state, action.payload)
    }
    case PLAY_PROD_BTN_CLICK: {
      return onPlayProdBtnClick(state, action.payload)
    }
    case SHOW_INFO_BNT_CLICK: {
      return onShowInfoBtnClick(state)
    }
    case SET_GAMES_TO_DEVELOPERS: {
      return setGamesToDevelopers(state)
    }
    default:
      return state
  }
}
