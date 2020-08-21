import React from 'react'
import { IProps, IState } from './utils/ts/interfaces'
import { renderRoutes, matchRoutes } from 'react-router-config'
import './App.scss'
import Header from './views/header/index'
import Footer from './views/footer/index'
import { connect } from 'react-redux'
import { mapStateToProps } from './utils/ts/common'
import { updateLoginState } from './redux/action'
import store from './redux/store'

class App extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = this.stateData
  }
  // state数据
  stateData:IState = {}

  componentDidMount () {
    console.log(1, store.getState())
    store.subscribe(() => {
      console.log(2, store.getState())
    })
    setTimeout(() => {
      this.props.dispatch(updateLoginState({
        isLogin: true,
        tokenid: '123'
      }))
    }, 2000)
  }

  // 处理当前路由信息
  private handleCurrentRoute () {
    // 配置路由字典
    const { childRoutes } = this.props.route
    // 当前路由路径
    const { pathname } = this.props.location
    // 当前路由元信息
    const currentRoute = matchRoutes(childRoutes, pathname)
    // 当前路由自定义meta参数
    const currentRouteMeta = currentRoute && currentRoute[0] ? currentRoute[0].route.meta || {} : {}

    return {
      childRoutes,
      currentRouteMeta
    }
  }

  render () {
    const { childRoutes, currentRouteMeta } = this.handleCurrentRoute()
    
    return (
      <div className="App">
        { currentRouteMeta.isNeedHeader ? <Header /> : null }
        {renderRoutes(childRoutes)}
        { currentRouteMeta.isNeedFooter ? <Footer /> : null }
      </div>
    )
  }
}



export default connect(mapStateToProps)(App)
