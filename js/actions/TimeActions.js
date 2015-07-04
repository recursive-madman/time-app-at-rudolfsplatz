
import constants from '../constants'
import Dispatcher from '../Dispatcher'

export default {
  refresh() {
    Dispatcher.dispatch({
      actionType: constants.REFRESH_TIME
    });
  }
}
