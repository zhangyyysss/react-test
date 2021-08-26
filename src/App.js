/** @format */

// 创建"外壳"组件 App
// { Component } 是分别暴露的意思,例如: export class Component {} 是这个意思(一定是语句, export 语句)
// 但是我们Component实际上是在React.Component = class Component{},所以我们es6模块这样  { Component }引入是错误的理解!
// 所以总结: React里面应该是使用了多种暴露的方式,至少有两种
// 第一种 React.Component = class Component {}    ->  export default React
// 第二种:export class Component {} 所以,下面的写法就是第二种的es6的普通导出 { Component } 就可以取到这个Component了
// 理解: 在import 中的 {} 根本就不是解构赋值......这是导出导入规则而已,看看es6把!
import React, {Component} from 'react'
// import Hello from './components/Hello/Hello'
// import Welcome from './components/Welcome/Welcome'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建并且默认导出App组件
export default class App extends Component {
    // 初始化状态
    state = {
        todos: [
            {id: 1, name: '吃饭', done: true},
            {id: 2, name: '睡觉', done: true},
            {id: 3, name: '打代码', done: false},
        ],
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                {/*
          <Hello />
          <Welcome />
        */}
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header />
                        <List todos={todos} />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
