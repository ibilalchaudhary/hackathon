import { combineReducers } from 'redux';
import machineTypeReducer from './MachineTypesReducer';
import machineReducer from './MachinesReducer';

const rootReducer = combineReducers({
    machineTypes: machineTypeReducer,
    machines: machineReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
