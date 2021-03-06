import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink exact activeClassName="is-active" to="/">DashBoard</NavLink>---
      <NavLink activeClassName="is-active" to="/create">New Expense</NavLink>---
      <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>---
      <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
);

export default Header;