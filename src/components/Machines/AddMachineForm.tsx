import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, List, Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addMachine } from '../../actions/MachinesActions';
import { MachineAttribute, Machine } from '../../interfaces/MachinesInterface';

interface AddMachineFormProps {
    type: string;
    attributes: MachineAttribute[];
}

const AddMachineForm: React.FC<AddMachineFormProps> = ({ type, attributes }) => {
    const dispatch = useDispatch();
    const [machineAttributes, setMachineAttributes] = useState<MachineAttribute[]>(
        attributes.map((attr) => ({ ...attr, value: getDefaultAttributeValue(attr.type) }))
    );

    const handleAddMachine = () => {
        const newMachine: Machine = {
            id: String(Math.random()),
            type,
            attributes: machineAttributes,
        };
        // @ts-ignore
        dispatch(addMachine(newMachine));
    };

    console.log("machineAttributes",machineAttributes)
    return (
        <View>
            {machineAttributes.map((attr, index) => (
                <TextInput
                    key={attr.id}
                    label={attr.name}
                    value={String(attr.value)}
                    onChangeText={(value) =>
                        setMachineAttributes(
                            machineAttributes.map((a, i) => (i === index ? { ...a, value: castValue(a.type, value) } : a))
                        )
                    }
                    keyboardType={getKeyboardType(attr.type)}
                    style={{ marginBottom: 8 }}
                />
            ))}
            <Button mode="contained" onPress={handleAddMachine} style={{ marginBottom: 16 }}>
                Add Machine
            </Button>
            <Divider />
        </View>
    );
};
const getDefaultAttributeValue = (
    type: 'date' | 'text' | 'checkbox' | 'number'
): string | boolean | number | Date => {
    switch (type) {
        case 'text':
            return '';
        case 'number':
            return 0;
        case 'checkbox':
            return false;
        case 'date':
            return new Date();
        default:
            return '';
    }
};



const castValue = (type: 'date' | 'text' | 'checkbox' | 'number', value: string): string | boolean | number | Date => {
    switch (type) {
        case 'text':
            return value;
        case 'number':
            return Number(value);
        case 'checkbox':
            return Boolean(value);
        case 'date':
            return new Date(value);
    }
};

const getKeyboardType = (type: 'date' | 'text' | 'checkbox' | 'number'): 'default' | 'numeric' => {
    switch (type) {
        case 'text':
            return 'default';
        case 'number':
            return 'numeric';
        case 'checkbox':
            return 'default';
        case 'date':
            return 'default';
    }
};

export default AddMachineForm;
