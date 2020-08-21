/**
 * action说明：
 * type：操作类型
 * payload：有效载荷，即传入的值
 */

import initialState from '../state/index'

// 更新登录态
const updateLoginState = (state = initialState, action) => {
  let newState = {}

  if (action.type === 'UPDATE_LOGIN_STATE') { // 更新所有登录态信息(包含：isLogin、tokenid、userInfo等)
    newState.isLogin = action.payload.isLogin || false
    newState.tokenid = action.payload.tokenid || ''
    newState.userInfo = action.payload.userInfo || {}
  } else if (action.type === 'UPDATE_LOGIN') { // 更新登录状态(包含：isLogin、tokenid)
    newState.isLogin = action.payload.isLogin || false
    newState.tokenid = action.payload.tokenid || ''
  } else if (action.type === 'UPDATE_USER_INFO') { // 更新用户信息(包含：userInfo)
    newState.userInfo = action.payload.userInfo || {}
  }

  return {...state, ...newState}
}

export {
  updateLoginState
}