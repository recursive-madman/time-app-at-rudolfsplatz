
import { EventEmitter } from 'events'
import assign from 'object-assign'
import constants from '../constants'
import Dispatcher from '../Dispatcher'

let time = new Date();

const TimeStore = assign(
  new EventEmitter(), {

    getTime() {
      return time;
    },

    emitChange() {
      this.emit('change');
    },

    addChangeListener(listener) {
      this.on('change', listener);
    },

    removeChangeListener(listener) {
      this.removeListener('change', listener);
    }
  }
);

export default TimeStore;

Dispatcher.register(action => {
  switch(action.actionType) {
  case constants.REFRESH_TIME:
    time = new Date();
    TimeStore.emitChange();
    break;
  }
});
