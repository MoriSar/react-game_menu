import {
  SETUP_MENU_COMPONENT,
  CHANGE_VERSION,
  SHOW_HIDE_GAME_INFO,
  PLAY_DEV_BTN_CLICK,
  PLAY_PROD_BTN_CLICK,
  SWITCH_PROJECT,
  FIND_INPUT_CHANGE,
  GET_GAME_LIST,
  GET_IP_LIST,
  GET_VERSIONS_LIST,
  SET_PRELOADER,
  SHOW_INFO_BNT_CLICK,
  SET_GAMES_TO_DEVELOPERS,
} from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const setupMenuComponent = createAction(SETUP_MENU_COMPONENT)
export const changeVersion = createAction(CHANGE_VERSION)
export const showHideGameInfo = createAction(SHOW_HIDE_GAME_INFO)
export const playDevBtnClick = createAction(PLAY_DEV_BTN_CLICK)
export const playProdBtnClick = createAction(PLAY_PROD_BTN_CLICK)
export const switchProject = createAction(SWITCH_PROJECT)
export const findInputChange = createAction(FIND_INPUT_CHANGE)
export const getGameList = createAction(GET_GAME_LIST)
export const getIPList = createAction(GET_IP_LIST)
export const getVersionsList = createAction(GET_VERSIONS_LIST)
export const setPreloader = createAction(SET_PRELOADER)
export const showInfoBtnClick = createAction(SHOW_INFO_BNT_CLICK)
export const setGamesToDevelopers = createAction(SET_GAMES_TO_DEVELOPERS)
