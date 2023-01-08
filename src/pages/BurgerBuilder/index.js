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
    if (this.state.ingredients[type] > 0) {
      const minusIngredients = {...this.state.ingredients};

      // Hasah tooruu orohgvi hamgaalaw
      minusIngredients[type]--;
      
      // What is number see
      console.log(minusIngredients[type]);
      this.setState({ingredients: minusIngredients});
    }
  }

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for(let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls disabledIngredients={disabledIngredients} ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah} />
      </div>
    );
  }
}

export default BurgerBuilder;
