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

const Screen1 = ({ navigation }) => {
    return (
        <SafeAreaView >
            <MyNavbar left="MyFlatlist" right="Screen2" navigation={navigation} />
            <Text style={styles.text}>
                Welcome to Screen 1!
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

export default Screen1;