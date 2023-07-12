import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, Button } from 'react-native';
import { fetchMachineTypes } from '../../actions/MachineTypesActions';
import { RootState } from '../../reducers';
import { useNavigation } from '@react-navigation/native';

const MachineTypes = () => {
    const dispatch = useDispatch();
    const machineTypes = useSelector((state: RootState) => state.machineTypes.machineTypes);
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(fetchMachineTypes());
    }, [dispatch]);

    const handleAddMachineType = () => {
        navigation.navigate('AddMachineType');
    };

    return (
        <View>
            <FlatList
                data={machineTypes}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                keyExtractor={(item) => item.id}
            />
            <Button title="Add New Machine Type" onPress={handleAddMachineType} />
        </View>
    );
};

export default MachineTypes;
