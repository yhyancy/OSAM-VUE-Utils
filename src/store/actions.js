import * as types from './mutation-types'
export default {
  setCurrUser ({ commit }, user) {
    commit(types.SET_CURRENT_USER, user)
  },

  rmCurrUser ({ commit }, emptyUser) {
    commit(types.REMOVE_CURRENT_USER, emptyUser)
  },

  changeCurrUser ({ commit }, payload) {
    commit(types.CHANGE_CURRENT_USER, payload)
  },

  setIbmUniqueId ({ commit }, payload) {
    commit(types.SET_IBM_UNIQUE_ID, payload)
  },

  setCurrLanguage ({ commit }, language) {
    commit(types.SET_LANGUAGE, language)
  },
  // eslint-disable-next-line
  setCurrHeaderTab ({ commit }, header_tab) {
    commit(types.SET_HEADER_TAB, header_tab)
  },

  setRegister ({ commit }, register) {
    commit(types.SET_REGISTER, register)
  },

  setRegisterAttributes ({ commit }, attributes) {
    commit(types.SET_REGISTER_ATTRIBUTES, attributes)
  },

  setRegisterAuthorization ({ commit }, authorization) {
    commit(types.SET_REGISTER_AUTHORIZATION, authorization)
  },

  setRegisterEntitlement ({ commit }, entitlement) {
    commit(types.SET_REGISTER_ENTITLEMENT, entitlement)
  },

  setRegisterEmaildomains ({ commit }, emaildomains) {
    commit(types.SET_REGISTER_EMAILDOMAINS, emaildomains)
  },

  setCurrUserList ({ commit }, arr) {
    commit(types.SET_CURRENT_USERLIST, arr)
  },

  removeCurrUserList ({ commit }) {
    commit(types.REMOVE_CURRENT_USERLIST)
  }
}
