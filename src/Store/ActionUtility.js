export default class ActionUtility {
  static createAction(type, payload = undefined, isLoading = false, error = false, meta = null) {
    return { type, payload, error, meta };
  }
}
