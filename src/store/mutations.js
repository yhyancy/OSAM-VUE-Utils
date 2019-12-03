import * as types from './mutation-types'
export default {
  [types.SET_CURRENT_USER] (state, payload) {
    state.currUser = payload
  },

  [types.REMOVE_CURRENT_USER] (state) {
    state.currUser = {}
  },

  [types.CHANGE_CURRENT_USER] (state, payload) {
    state.currUser.iruser.status = payload.status
    state.currUser.authorization.roleid = payload.roldId
  },

  [types.SET_IBM_UNIQUE_ID] (state, payload) {
    state.ibmUniqueId = payload
  },

  [types.SET_LANGUAGE] (state, payload) {
    state.language = payload
  },

  [types.SET_HEADER_TAB] (state, payload) {
    state.header_tab = payload
  },

  [types.SET_REGISTER] (state, payload) {
    // console.log('SET_REGISTER=====', payload)
    state.register = { ...state.register, ...payload }
  },

  [types.SET_REGISTER_ATTRIBUTES] (state, payload) {
    // Object.keys(payload).forEach(function (key) {
    //   // console.log('SET_REGISTER_ATTRIBUTES======', key, payload[key])
    //   state.register.attributes[key] = payload[key]
    // })
    state.register.attributes = { ...state.register.attributes, ...payload }
  },

  [types.SET_REGISTER_AUTHORIZATION] (state, payload) {
    // Object.keys(payload).forEach(function (key) {
    //   // console.log('SET_REGISTER_AUTHORIZATION======', key, payload[key])
    //   state.register.authorization[key] = payload[key]
    // })
    state.register.authorization = { ...state.register.authorization, ...payload }
  },

  [types.SET_REGISTER_ENTITLEMENT] (state, payload) {
    // TODO: check how to process the array
    state.register.entitlement = payload
  },

  [types.SET_REGISTER_EMAILDOMAINS] (state, payload) {
    // TODO: check how to process the array
    state.register.emaildomains = payload
  },

  [types.SET_CURRENT_USERLIST] (state, playload) {
    state.currUserList = playload
  },

  [types.REMOVE_CURRENT_USERLIST] (state) {
    state.currUserList = []
  }
}
