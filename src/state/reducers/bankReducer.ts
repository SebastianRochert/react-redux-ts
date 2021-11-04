import {Action} from "../actions";
import {ActionType} from "../action-types";

const initalState = 0;

/*
// actions is going to look something like this:
{   // an Object that contains the type and the payload with an optional payload number
    type: string,
    payload?: number  //the '?' specifies that the field is optional
}
 */

const reducer = (state: number = initalState, action: Action) => { //action has a type and a payload
    switch (action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default:
            return state;
    }
}

export default reducer;