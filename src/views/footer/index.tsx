import React from 'react'
import { IProps, IState } from '../../utils/ts/interfaces'
import './index.scss'

class Footer extends React.Component<IProps, IState> {
  render () {
    return (
      <div className="footer">
        尾部
      </div>
    )
  }
}

export default Footer