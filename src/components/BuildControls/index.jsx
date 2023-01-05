import React from "react";

import css from "./style.module.css";

import BuildControl from "../BuildControl";

const BuildControls = props =>
(<div className={css.BuildControls}>
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} type="salad" orts="Салад" />
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} type="bacon" orts="Гахайн мах" />
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} type="cheese" orts="Бяслаг" />
    <BuildControl ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} type="meat" orts="Үхрийн мах" />
</div>);

export default BuildControls;