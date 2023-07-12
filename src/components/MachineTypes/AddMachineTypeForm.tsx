import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addMachineType } from '../../actions/MachineTypesActions';

const AddMachineType: React.FC = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [attributes, setAttributes] = useState('');
    const [error, setError] = useState('');

    const handleAddMachineType = () => {
        if (title.trim() === '' || attributes.trim() === '') {
            setError('Title and attributes are required.');
            return;
        }

        const newMachineType = {
            id: String(Math.random()),
            title,
            attributes: attributes.split(',').map((attr) => attr.trim()),
        };

        // @ts-ignore
        dispatch(addMachineType(newMachineType));
        setTitle('');
        setAttributes('');
        setError('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={title}
                onChangeText={setTitle}
                label="Title"
                mode="flat"
                style={styles.input}
            />
            <TextInput
                value={attributes}
                onChangeText={setAttributes}
                label="Attributes (comma-separated)"
                mode="flat"
                style={styles.input}
            />
            {error !== '' && <Text style={styles.error}>{error}</Text>}
            <Button mode="contained" onPress={handleAddMachineType} style={styles.button}>
                Add New Machine Type
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    input: {
        marginBottom: 8,
    },
    error: {
        color: 'red',
        marginBottom: 8,
    },
    button: {
        marginBottom: 8,
    },
});

export default AddMachineType;
