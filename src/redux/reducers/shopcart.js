import { SAVEPRODUCTLIST, ADD } from "../constant";
const INITIAL_STATE = {
  productList: [],
};

export default function shopcart(state = INITIAL_STATE, action) {
  const type = action.type;
  switch (type) {
    case SAVEPRODUCTLIST:
      var list = action.data;
      list.forEach((element) => {
        element.count = 0;
      });
      return { ...state, productList: list };
      break;
    case ADD:
      const id = action.data;
      state.productList.forEach((element) => {
        if (id === element.id) {
          element.count++;
        }
      });
      return { ...state, productList: state.productList };
      break;
    default:
      return state;
      break;
  }
}
