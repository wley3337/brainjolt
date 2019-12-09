import React, { useState } from "react";
import "./App.css";
import { selectionArray, Iitem } from "../enumerables/selectionArray";
import ItemDetail from "../components/ItemDetail";

const App: React.FC = () => {
  const initialState = {
    selArray: shuffleArray(selectionArray),
    selIndex: 0
  };

  const [sel, setSel] = useState(initialState);

  // state is sample array from selection array random order
  return (
    <div className="App">
      <img
        className="logo"
        src="https://twentytwowords.com/wp-content/themes/premise/img/22logo-small.png"
        alt="22 words logo"
      />
      <ItemDetail item={sel.selArray[sel.selIndex]} />
      <button
        className="next-button"
        onClick={e => {
          let i = sel.selIndex;
          let selArray = sel.selArray;
          if (i < selArray.length - 1) {
            setSel({ ...sel, selIndex: i += 1 });
          } else {
            setSel({ selArray: shuffleArray(selectionArray), selIndex: 0 });
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default App;

function shuffleArray(array: Array<Iitem>): Array<Iitem> {
  let copy_array = [...array];
  const ran_array = [];
  for (let i = array.length; i > 0; i--) {
    let ranNum = Math.floor(Math.random() * copy_array.length);
    //splice copy array
    const item = copy_array.splice(ranNum, 1)[0];
    //add item to return array
    ran_array.push(item);
  }
  return ran_array;
}
