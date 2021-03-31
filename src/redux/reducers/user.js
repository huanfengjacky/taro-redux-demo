import { SAVEUSERINFO, CHANGENAME } from "../constant";
const INITIAL_STATE = {
  name: "",
  age: 0,
  sex: 1,
};

export default function user(state = INITIAL_STATE, action) {
  const type = action.type;
  switch (type) {
    case SAVEUSERINFO:
        return action.data;
      break;
    case CHANGENAME:
        return {
            ...state,
            name:action.data
        }
      break;
    default:
        return state;
      break;
  }
}
