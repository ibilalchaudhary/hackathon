import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, IconButton, List, Card, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { updateMachine } from '../../actions/MachinesActions';
import { Machine, MachineAttribute } from '../../interfaces/MachinesInterface';

interface MachineListItemProps {
    machine: Machine;
    handleRemoveMachine: (machineId: string) => void;
}

const MachineListItem: React.FC<MachineListItemProps> = ({ machine, handleRemoveMachine }) => {
    const dispatch = useDispatch();
    const [machineAttributes, setMachineAttributes] = useState<MachineAttribute[]>(machine.attributes);
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        setMachineAttributes(machine.attributes);
    }, [machine.attributes]);

    const handleUpdateMachine = () => {
        const updatedMachine: Machine = {
            ...machine,
            attributes: machineAttributes,
        };
        dispatch(updateMachine(updatedMachine));
        setIsEditable(false);
    };

    const handleDeleteMachine = () => {
        handleRemoveMachine(machine.id);
    };

    return (
        <Card style={{ marginBottom: 16 }}>
            <Card.Title
                title={machine.name}
                left={(props) => <List.Icon {...props} icon="cog-outline" />}
                right={(props) => (
                    <View>
                        <IconButton icon="pencil" onPress={() => setIsEditable(true)} />
                        <IconButton icon="check" onPress={handleUpdateMachine} disabled={!isEditable} />
                        <IconButton icon="delete" onPress={handleDeleteMachine} />
                    </View>
                )}
            />
            <Card.Content>
                {machineAttributes.map((attr, index) => (
                    <View key={attr.id}>
                        <Paragraph>{attr.name}</Paragraph>
                        <TextInput
                            value={String(attr.value)}
                            onChangeText={(value) =>
                                setMachineAttributes(
                                    machineAttributes.map((a, i) =>
                                        i === index ? { ...a, value: castValue(a.type, value) } : a
                                    )
                                )
                            }
                            style={{ marginBottom: 8 }}
                            editable={isEditable}
                        />
                    </View>
                ))}
            </Card.Content>
        </Card>
    );
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
        default:
            return value;
    }
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


export default MachineListItem;
