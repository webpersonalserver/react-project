import React from 'react'
import ReactDOM from 'react-dom'
import BasicRoute from './routes/index'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './redux/store/index'
// 导入组件的样式
import 'antd/dist/antd.css'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BasicRoute />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
