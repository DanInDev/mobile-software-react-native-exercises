import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <Text style={styles.text}>HELLO WORLD!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    borderColor: "black",
  },
  container: {
    borderRadius: 25,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
