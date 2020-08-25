import React from 'react'
import { IProps, IState } from '../../utils/ts/interfaces'
import './index.scss'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../utils/ts/common'

class Home extends React.Component<IProps, IState> {
  componentDidMount () {}

  render () {
    return (
      <div className="home">
        首页
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)