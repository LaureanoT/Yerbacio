import React, {useContext} from "react";
import Cards from "../cards/Cards";
import { AuxiliarProductosOrganico } from "../../utils/data";

export default function ItemListContainer() {

  return (
    <div className="listenContainer">
      {AuxiliarProductosOrganico.map((prod) => (
        <div key={prod.id}>
          <Cards product={prod} />
        </div>
      ))}
    </div>
  );
}