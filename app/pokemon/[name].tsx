import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

    export default function name() {
    const params = useLocalSearchParams();
    return (
        <View>
        <Text>name</Text>
        <Text>{params.name}</Text>
        </View>
    );
}