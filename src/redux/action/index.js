// 更新所有登录态信息(包含：isLogin、tokenid、userInfo等)
const updateLoginState = (payload) => {
  return {
    type: 'UPDATE_LOGIN_STATE',
    payload
  }
}

// 更新登录状态(包含：isLogin、tokenid)
const updateLOGIN = (payload) => {
  return {
    type: 'UPDATE_LOGIN',
    payload
  }
}

// 更新用户信息(包含：userInfo)
const updateUserInfo = (payload) => {
  return {
    type: 'UPDATE_USER_INFO',
    payload
  }
}

export {
  updateLoginState,
  updateLOGIN,
  updateUserInfo
}