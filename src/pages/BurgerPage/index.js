import React from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENTS_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const INGREDIENTS_NAMES = {
  salad: "Салад",
  cheese: "Бяслаг",
  bacon: "Гахайн мах",
  meat: "Үхрийн мах",
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false,
  };

  continueOrder = () => {
    console.log("Continue daragdlaa ...");
  }

  // state merge
  showConfirmModal = () => {
    this.setState({confirmOrder: true});
  }

  closeConfirmModal = () => {
    this.setState({confirmOrder: false});
  }

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] >= 0
      ? newIngredients[type]++
      : console.log("Error 0000");

    const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
    console.log(newIngredients[type]);
    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredients,
    });
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const minusIngredients = { ...this.state.ingredients };

      // Hasah tooruu orohgvi hamgaalaw
      minusIngredients[type]--;

      const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];

      // What is number see
      console.log(minusIngredients[type]);
      this.setState({
        purchasing: newPrice > 1000,
        totalPrice: newPrice,
        ingredients: minusIngredients,
      });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return (
      <div>
        <Modal 
        show={this.state.confirmOrder}
        closeConfirmModal={this.closeConfirmModal}
        >
          <OrderSummary
            onCancel={this.closeConfirmModal}
            onContinue={this.continueOrder}
            price={this.state.totalPrice}
            ingredientsNames={INGREDIENTS_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENTS_NAMES}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
