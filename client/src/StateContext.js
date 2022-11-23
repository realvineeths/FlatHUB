import React, { useState } from "react";

const StateContext = React.createContext([{}, () => {}]);

let initialState = {};

function StateProvider (props){
  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider value={[state, setState]}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };