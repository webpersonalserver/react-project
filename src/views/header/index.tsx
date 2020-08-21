import React from 'react'
import { IProps, IState } from '../../utils/ts/interfaces'
import './index.scss'

class Header extends React.Component<IProps, IState> {
  render () {
    return (
      <div className="header">
        头部
      </div>
    )
  }
}

export default Header