import React from 'react'
import { IProps, IState } from '../../utils/ts/interfaces'
import './index.scss'
import store from '../../redux/store'

class Header extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = this.stateData
  }
  // state数据
  stateData:IState = {
    isLogin: false,
    userInfo: {},
    nav: [{
      label: '首页'
    }, {
      label: '葡萄酒'
    }, {
      label: '啤酒'
    }, {
      label: '烈酒'
    }, {
      label: '酒商'
    }, {
      label: '资讯'
    }, {
      label: '求购'
    }, {
      label: '关于酒先知'
    }]
  }

  componentDidMount () {
    this.initData()
  }

  private initData () {
    this.handleLoginState()

    // 监听登录状态的变化
    store.subscribe(() => {
      this.handleLoginState()
    })
  }

  // 处理登录态数据
  private handleLoginState () {
    const commonState = store.getState().updateLoginState
    
    this.setState({
      isLogin: commonState.isLogin,
      userInfo: commonState.userInfo
    })
  }

  // 根据登录态渲染不同数据
  private renderUserInfo () {
    const { isLogin, userInfo } = this.state

    // 判断是否登录
    if (isLogin) {
      return (
        <div className="header-left__userinfo">
          <p className="header-left__userinfo_name">{userInfo.name || ''}</p>
          <p className="header-left__userinfo_click">个人中心</p>
        </div>
      )
    } else {
      return (
        <div className="header-left__userinfo">
          <p className="header-left__userinfo_click">采购商登录</p>
          <p className="header-left__userinfo_click">供应商登录</p>
        </div>
      )
    }
  }

  // 渲染头部右侧数据
  private renderRight () {
    const { nav } = this.state
    const navbar:any = []

    nav.forEach((item:any, index:number) => {
      navbar.push(<p className="header-right_bar" key={index}>{item.label}</p>)
    })

    return (
      <div className="header-right">
        {navbar}
        <p className="header-right__service">
          客服热线
          <span className="header-right__service_phone">400-234-2323</span>
        </p>
      </div>
    )
  }

  render () {
    return (
      <div className="header">
        <div className="header-module"> 
          <div className="header-left">
            <span>欢迎来到酒先知！</span>
            { this.renderUserInfo () }
          </div>
          { this.renderRight () }
        </div>
      </div>
    )
  }
}

export default Header