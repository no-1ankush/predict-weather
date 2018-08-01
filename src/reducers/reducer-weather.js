import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //Concat the new data on the existing state
      return [ action.payload.data, ...state ];
    default:
      return state;
  }
}
