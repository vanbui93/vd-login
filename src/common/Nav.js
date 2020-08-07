import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

//Muốn customize class=selected, ở thành phần cha, ko phải thẻ <a> => tạo 1 func riêng
//Tự tạo ra 1 link do mình định nghĩa
//match kiểm tra khi nào url trùng khớp thêm class=active
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        var active = match ? "nav-item selected" : '';
        return (
          //cách viết ES6, TH ko trùng khớp my-li, trùng khớp my-li & {active}
          <li className={`my-li ${active}`}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

//Tạo ra 1 mảng quản lý menu, đổ menu động
const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Giới thiệu',
    to: '/about',
    exact: false
  },
  {
    name: 'Liện hệ',
    to: '/contact',
    exact: false
  },
  {
    name: 'Sản phẩm',
    to: '/products',
    exact: false
  },
  {
    name: 'Đăng nhập',
    to: '/login',
    exact: false
  }
];

export default class Nav extends Component {

  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0) {
      result = menus.map((menu,index) => {
        return (
          <MenuLink 
            key={index} 
            label={menu.name} 
            to={menu.to} 
            activeOnlyWhenExact={menu.exact} 
          />
        )
      });
    }
    return result;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </nav>
    )
  }
}
