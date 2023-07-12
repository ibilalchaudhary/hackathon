import { Dispatch } from 'redux';
import { MachineType } from '../interfaces/MachineTypesInterface';

export const FETCH_MACHINE_TYPES = 'FETCH_MACHINE_TYPES';
export const ADD_MACHINE_TYPE = 'ADD_MACHINE_TYPE';
export const REMOVE_MACHINE_TYPE = 'REMOVE_MACHINE_TYPE';
export const UPDATE_MACHINE_TYPE = 'UPDATE_MACHINE_TYPE';



interface FetchMachineTypesAction {
    type: typeof FETCH_MACHINE_TYPES;
    payload: MachineType[];
}

interface AddMachineTypeAction {
    type: typeof ADD_MACHINE_TYPE;
    payload: MachineType;
}

interface RemoveMachineTypeAction {
    type: typeof REMOVE_MACHINE_TYPE;
    payload: string;
}

interface UpdateMachineTypeAction {
    type: typeof UPDATE_MACHINE_TYPE;
    payload: MachineType;
}
export const fetchMachineTypes = () => async (dispatch: Dispatch) => {
    const machineTypes: MachineType[] = [];

    dispatch({
        type: FETCH_MACHINE_TYPES,
        payload: machineTypes,
    });
};

export const addMachineType = (machineType: MachineType) => async (dispatch: Dispatch) => {
    dispatch({
        type: ADD_MACHINE_TYPE,
        payload: machineType,
    });
};

export const removeMachineType = (id: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: REMOVE_MACHINE_TYPE,
        payload: id,
    });
};

export const updateMachineType = (machineType: MachineType) => async (dispatch: Dispatch) => {
    dispatch({
        type: UPDATE_MACHINE_TYPE,
        payload: machineType,
    });
};

export type MachineTypeActionTypes = FetchMachineTypesAction | AddMachineTypeAction | RemoveMachineTypeAction | UpdateMachineTypeAction;
