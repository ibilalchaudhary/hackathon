import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { removeMachineType } from '../actions/MachineTypesActions';
import AddMachineType from "../components/MachineTypes/AddMachineTypeForm";
import MachineTypeListItem from "../components/MachineTypes/MachineTypeListItem";

const MachineTypesScreen: React.FC = () => {
    const machineTypes = useSelector((state: RootState) => state.machineTypes.machineTypes);
    const dispatch = useDispatch();

    const handleRemoveMachineType = (id: string) => {
        dispatch(removeMachineType(id));
    };

    return (
        <View style={{paddingHorizontal:14,paddingVertical:10}}>
            <AddMachineType />
            <FlatList
                data={machineTypes}
                renderItem={({ item }) => (
                    <MachineTypeListItem machineType={item} onRemove={handleRemoveMachineType} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default MachineTypesScreen;
