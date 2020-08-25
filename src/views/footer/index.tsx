import React from 'react'
import { IProps, IState } from '../../utils/ts/interfaces'
import './index.scss'

class Footer extends React.Component<IProps, IState> {
  render () {
    return (
      <div className="footer">
        <div className="footer-module">
          <div className="footer__left">
            <a className="footer__left_jump" href="http://www.szpacco.com/" target="__blank">深圳百高文化传播有限公司</a>
            <p className="footer__left_option">地址：深圳市南山区登良路恒裕中心A座4层402</p>
            <p className="footer__left_option">免费电话：400-999-7728 邮箱：ICPD@szpacco.com </p>
            <p className="footer__left_option">版权所有 © Copyright 2016-2018</p>
            <a className="footer__left_jump" style={{marginBottom: 0}} href="http://www.beian.miit.gov.cn/" target="__blank">粤ICP备19103744号-1</a>
          </div>
          <div className="footer__right">
            <img className="footer__right_code" src={require("../../utils/images/common/qrcode_weixin.jpg")} alt=""/>
            <p className="footer__right_mark">微信公众号</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer