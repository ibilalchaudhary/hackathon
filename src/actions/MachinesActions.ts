import { Dispatch } from 'redux';
import { Machine } from '../interfaces/MachinesInterface';

export const FETCH_MACHINES = 'FETCH_MACHINES';
export const ADD_MACHINE = 'ADD_MACHINE';
export const REMOVE_MACHINE = 'REMOVE_MACHINE';
export const UPDATE_MACHINE = 'UPDATE_MACHINE';

interface FetchMachinesAction {
    type: typeof FETCH_MACHINES;
    payload: Machine[];
}

interface AddMachineAction {
    type: typeof ADD_MACHINE;
    payload: Machine;
}

interface RemoveMachineAction {
    type: typeof REMOVE_MACHINE;
    payload: string;
}

interface UpdateMachineAction {
    type: typeof UPDATE_MACHINE;
    payload: Machine;
}

export const fetchMachines = () => async (dispatch: Dispatch) => {
    const machines: Machine[] = [];

    dispatch({
        type: FETCH_MACHINES,
        payload: machines,
    });
};

export const addMachine = (machine: Machine) => async (dispatch: Dispatch) => {
    dispatch({
        type: ADD_MACHINE,
        payload: machine,
    });
};

export const removeMachine = (id: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: REMOVE_MACHINE,
        payload: id,
    });
};

export const updateMachine = (machine: Machine) => async (dispatch: Dispatch) => {
    dispatch({
        type: UPDATE_MACHINE,
        payload: machine,
    });
};

export type MachineActionTypes = FetchMachinesAction | AddMachineAction | RemoveMachineAction | UpdateMachineAction;
