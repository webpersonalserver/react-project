import React from 'react'
import { IProps, IState } from '../../utils/ts/interfaces'
import './index.scss'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../utils/ts/common'
import store from '../../redux/store'

class Home extends React.Component<IProps, IState> {
  componentDidMount () {
    store.subscribe(() => {
      console.log(4, store.getState())
    })
  }

  render () {
    console.log(3, this.props)
    return (
      <div className="home">
        首页
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)