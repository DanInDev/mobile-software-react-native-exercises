import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MyNavbarProps {
  left: string;
  right: string;
  navigation: any;
}

const MyNavbar: React.FC<MyNavbarProps> = ({ left, right, navigation }) => {


  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.navigate(left)}
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.navigate(right)}
      >
        <Text style={styles.arrowText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    padding: 15,
  },
  arrowText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
});

export default MyNavbar;
