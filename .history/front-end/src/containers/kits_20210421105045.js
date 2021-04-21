import React from "react";
import Kit from "../components/Kit.js";

const Kits = (props) => {
  return (
    <div>
        {props.kits.map((kit) => (<Kit key={kit.id} cameras={props.cameras} lens={props.lens} kits={props.kits}/>))}
    </div>
  );
};

export default Kits;