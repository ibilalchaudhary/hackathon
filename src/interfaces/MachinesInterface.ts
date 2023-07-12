export interface MachineAttribute {
    id: string;
    name: string;
    type: 'date' | 'text' | 'checkbox' | 'number';
    value: string | boolean | number | Date;
}

export interface Machine {
    id: string;
    type: string;
    attributes: MachineAttribute[];
}