import React, { Component } from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import Sidebar from "../../components/Sidebar";
import OrderPage from "../OrderPage";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  state = {
    showSidebar: false,
  };

  // Prev saved state on set state hiih ved
  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          <Routes>
            <Route path="/orders" element={<OrderPage/>} />
            <Route path="/" element={<BurgerPage/>} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
