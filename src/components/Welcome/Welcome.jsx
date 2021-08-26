import React, { Component } from "react";
// 模块形式引入css,防止冲突覆盖
import welcome from "./Welcome.module.css";
// import hello from "../Hello/Hello";

export default class Hello extends Component {
  render() {
    return <div className={welcome.title}>Welcome!</div>;
  }
}
