const loggedReducer = (state = false, action: any) => {
  switch (action.type) {
    case "sign_in":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
