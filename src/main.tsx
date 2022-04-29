import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "virtual:windi.css";
import './index.css'

//每一个import就相当于一个http请求，可以在浏览器的网络调试工具里看到
// Vite理念： no-bundle
// 无需打包，利用浏览器原生ES模块的支持，按需加载每个页面的资源

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
