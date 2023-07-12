import React, { useState } from 'react';
import {View, TouchableOpacity, Text, Pressable, SafeAreaView} from 'react-native';

import MachineTypesScreen from '../screens/MachineTypesScreen';
import MachinesScreen from '../screens/MachinesScreen';

const AppNavigator = () => {
    const [activeTab, setActiveTab] = useState('MachineTypes');

    const renderScreen = () => {
        switch (activeTab) {
            case 'MachineTypes':
                return <MachineTypesScreen />;
            case 'Machines':
                return <MachinesScreen />;
            default:
                return null;
        }
    };

    const renderTabButton = (title: string) => {
        const isActive = activeTab === title;

        return (
            <Pressable
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isActive ? 'lightblue' : 'white',
                }}
                onPress={() => setActiveTab(title)}
            >
                <Text>{title}</Text>
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', height: 50 }}>
                {renderTabButton('MachineTypes')}
                {renderTabButton('Machines')}
            </View>
            {renderScreen()}
        </SafeAreaView>
    );
};

export default AppNavigator;
