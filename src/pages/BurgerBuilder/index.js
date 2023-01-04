import React from "react";

import Burger from '../../components/Burger';

class BurgerBuilder extends React.Component {
  render() {
    return (<div>
      <Burger />
      <div>Ingredients control</div>
    </div>);
  }
}

export default BurgerBuilder;