import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MachinesReducer from '../reducers/MachinesReducer';
import MachineTypesReducer from "../reducers/MachineTypesReducer";

const rootReducer = combineReducers({
    machineTypes: MachineTypesReducer,
    machines: MachinesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
