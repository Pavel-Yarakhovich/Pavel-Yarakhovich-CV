import BaseReducer from "../BaseReducer";
import ServiceAction from "./serviceAction";

export default class ServiceReducer extends BaseReducer {
  initialState = {
    isModalOpen: false,
    content: '',
  };

  [ServiceAction.OPEN_MODAL](state, action) {
    return {
      ...state,
      isModalOpen: true,
      content: action.payload.content,
    };
  }

  [ServiceAction.CLOSE_MODAL](state, action) {
    return {
      ...state,
      isModalOpen: false,
      content: '',
    };
  }

}
