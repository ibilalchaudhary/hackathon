import {
    FETCH_MACHINE_TYPES,
    ADD_MACHINE_TYPE,
    MachineTypeActionTypes, REMOVE_MACHINE_TYPE, UPDATE_MACHINE_TYPE,
} from '../actions/MachineTypesActions';
import { MachineType } from '../interfaces/MachineTypesInterface';

export interface MachineTypeState {
    machineTypes: MachineType[];
}

const initialState: MachineTypeState = {
    machineTypes: [],
};

const MachineTypesReducer = (
    state = initialState,
    action: MachineTypeActionTypes,
): MachineTypeState => {
    switch (action.type) {
        case FETCH_MACHINE_TYPES:
            return {
                ...state,
                machineTypes: action.payload,
            };
        case ADD_MACHINE_TYPE:
            return {
                ...state,
                machineTypes: [...state.machineTypes, action.payload],
            };
        case REMOVE_MACHINE_TYPE:
            return {
                ...state,
                machineTypes: state.machineTypes.filter((machineType) => machineType.id !== action.payload),
            };
        case UPDATE_MACHINE_TYPE:
            return {
                ...state,
                machineTypes: state.machineTypes.map((machineType) =>
                    machineType.id === action.payload.id ? action.payload : machineType
                ),
            };
        default:
            return state;
    }
};

export default MachineTypesReducer;
