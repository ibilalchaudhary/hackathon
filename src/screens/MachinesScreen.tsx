import React from 'react';
import { View, FlatList,Text } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { removeMachine } from '../actions/MachinesActions';
import { MachineType } from '../interfaces/MachineTypesInterface';
import AddMachineForm from '../components/Machines/AddMachineForm';
import MachineListItem from '../components/Machines/MachineListItem';

const MachinesScreen: React.FC = () => {
    const machines = useSelector((state: RootState) => state.machines.machines);
    const machineTypes = useSelector((state: RootState) => state.machineTypes.machineTypes);
    const dispatch = useDispatch();

    const handleRemoveMachine = (id: string) => {
        dispatch(removeMachine(id));
    };

    const renderMachineItem = ({ item }: { item: MachineType }) => (
        <View key={item.id}>
            <AddMachineForm type={item.id} attributes={item.attributes} />
            <List.Section>
                <List.Subheader>{item.title}</List.Subheader>
                <FlatList
                    data={machines.filter((machine) => machine.type === item.id)}
                    renderItem={({ item }) => (
                        <View>
                            <MachineListItem machine={item} handleRemoveMachine={handleRemoveMachine} />
                            <Divider />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </List.Section>
        </View>
    );

    return (
        <View style={{paddingHorizontal:14}}>
            {machineTypes.length === 0 ? (
                <Text style={{fontSize:18, color:'#000',textAlign:'center',paddingVertical:30}}>No machine types available</Text>
            ) : (
                <FlatList
                    data={machineTypes}
                    renderItem={renderMachineItem}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    );
};

export default MachinesScreen;
