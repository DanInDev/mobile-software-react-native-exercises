// Example from https://reactnative.dev/docs/flatlist

import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
import MyNavbar from '../components/MyNavbar';

const Screen2 = ({ navigation }) => {
    return (
        <SafeAreaView >
            <MyNavbar left="Screen1" right="MyFlatlist" navigation={navigation} />
            <Text style={styles.text}>
                You changed to Screen2!
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Screen2;