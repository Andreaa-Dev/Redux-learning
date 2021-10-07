// reducer how action transform state to state

const counterReducer = (state = 0, action:any ){
    switch(action.type){
        case "increment":
            return state + 1;
        default: 
            return state;

    }
}
export default counterReducer;