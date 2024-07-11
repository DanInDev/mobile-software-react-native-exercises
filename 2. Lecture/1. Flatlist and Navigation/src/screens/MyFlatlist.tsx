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

type ItemProps = { title: string };

const generateData = () => {
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      title: `Item ${i}`,
    });
  }
  return data;
};

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MyFlatlist = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* As of 0.74.0 only applies on IOS devices */}
      <MyNavbar left="Screen2" right="Screen1" navigation={navigation} />
      <FlatList
        data={generateData()}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MyFlatlist;