import ActionUtility from "../ActionUtility";

export default class ServiceAction {
  static OPEN_MODAL = "ServiceAction.OPEN_MODAL";
  static CLOSE_MODAL = "ServiceAction.CLOSE_MODAL";

  static authSuccess() {
    return ActionUtility.createAction(ServiceAction.OPEN_MODAL);
  }

}
