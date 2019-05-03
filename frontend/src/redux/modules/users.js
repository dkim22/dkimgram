//import

//action

//action creator

//initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//reducer functions

//exports

//export reducer

export default reducer;
