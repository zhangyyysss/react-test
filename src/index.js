// 引入 react核心库
import React from 'react'
// 引入 ReactDOM
import ReactDOM from 'react-dom'
// 引入 index.css
import './index.css'
// 引入 App.js 组件(后缀因为脚手架中的webpack省略了js)
import App from './App'
// 引入 性能监控工具
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
