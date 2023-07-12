export interface MachineType {
    id: string;
    title: string;
    attributes: { [key: string]: string | number | boolean | Date };
}
