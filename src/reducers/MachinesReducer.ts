import { Machine, MachineAttribute } from '../interfaces/MachinesInterface';
import { MachineActionTypes, FETCH_MACHINES, ADD_MACHINE, REMOVE_MACHINE, UPDATE_MACHINE } from '../actions/MachinesActions';

interface MachinesState {
    machines: Machine[];
}

const initialState: MachinesState = {
    machines: [],
};

const MachinesReducer = (state = initialState, action: MachineActionTypes): MachinesState => {
    switch (action.type) {
        case FETCH_MACHINES:
            return {
                ...state,
                machines: action.payload,
            };
        case ADD_MACHINE:
            return {
                ...state,
                machines: [...state.machines, action.payload],
            };
        case REMOVE_MACHINE:
            return {
                ...state,
                machines: state.machines.filter((machine) => machine.id !== action.payload),
            };
        case UPDATE_MACHINE:
            return {
                ...state,
                machines: state.machines.map((machine) =>
                    machine.id === action.payload.id ? action.payload : machine
                ),
            };
        default:
            return state;
    }
};

export default MachinesReducer;
