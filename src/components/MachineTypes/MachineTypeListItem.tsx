import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { MachineType } from '../../interfaces/MachineTypesInterface';
import { removeMachineType, updateMachineType } from '../../actions/MachineTypesActions';

interface MachineTypeListItemProps {
    machineType: MachineType;
}

const MachineTypeListItem: React.FC<MachineTypeListItemProps> = ({ machineType }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(machineType.title);
    const [attributes, setAttributes] = useState(machineType?.attributes?.join(','));

    const handleRemove = () => {
        // @ts-ignore
        dispatch(removeMachineType(machineType.id));
    };

    const handleUpdate = () => {
        // @ts-ignore
        dispatch(updateMachineType({ ...machineType, title, attributes: attributes.split(',') }));
        setIsEditing(false);
    };

    return (
        <View style={styles.container}>
            {isEditing ? (
                <>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        label="Title"
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        value={attributes}
                        onChangeText={setAttributes}
                        label="Attributes (comma-separated)"
                        mode="outlined"
                        style={styles.input}
                    />
                    <View style={styles.buttonContainer}>
                        <IconButton
                            icon="content-save"
                            size={24}
                            onPress={handleUpdate}
                        />
                        <IconButton
                            icon="close"
                            size={24}
                            onPress={() => setIsEditing(false)}
                        />
                    </View>
                </>
            ) : (
                <>
                    <Text style={styles.title}>{machineType.title}</Text>
                    <Text style={styles.attributes}>{machineType.attributes.join(', ')}</Text>
                    <View style={styles.buttonContainer}>
                        <IconButton
                            icon="pencil"
                            size={24}
                            onPress={() => setIsEditing(true)}
                        />
                        <IconButton
                            icon="delete"
                            size={24}
                            onPress={handleRemove}
                        />
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    attributes: {
        fontSize: 14,
        marginBottom: 16,
    },
    input: {
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

export default MachineTypeListItem;
