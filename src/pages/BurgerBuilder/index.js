import React from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";


class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };

  ortsNemeh = (type) => {
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] >= 0? newIngredients[type]++:console.log("Error 0000");
    console.log(newIngredients[type]);
    this.setState({ingredients: newIngredients});
  }
  
  ortsHasah = (type) => {
    const minusIngredients = {...this.state.ingredients};
    // Hasah tooruu orohgvi hamgaalaw
    minusIngredients[type] > 0? minusIngredients[type]--: console.log("Error 0000");
    
    // What is number see
    console.log(minusIngredients[type]);
    this.setState({ingredients: minusIngredients});

  }

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah} />
      </div>
    );
  }
}

export default BurgerBuilder;
