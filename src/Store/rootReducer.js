import ServiceReducer from './service/serviceReducer';

export const reducers = {
  service : new ServiceReducer().reducer,
}