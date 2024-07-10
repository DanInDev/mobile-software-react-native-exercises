import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";


interface ComponentProps {
    color: string;
    amount: number;
}

export default function MyComponent({ color, amount }: ComponentProps) {

    /*
     
     Questions to ask:
 
     What would happen if we removed the useEffect for "amount"?
         - The parent component wouldn't be able to change the amount via its props,
           since the hook is no longer listening for changes. The initial value of "amount"
           would be set, but subsequent changes to the "amount" prop would be ignored.
 
     If the above is true, why does it still increment as normal?
         - The useState hook manages the component's internal state. The onPress function
           increments the currentAmount state, which is independent of the prop changes.
     
     What is the role of the second parameter in useEffect?
         - The second parameter of useEffect is a dependency array. When one of the dependencies
           changes, the effect runs. If it is an empty array, the effect runs only once when the
           component mounts.
 
     Why use useEffect for color and amount props?
         - useEffect is used to synchronize the component's state with the prop changes. 
           Without useEffect, changes in props would not reflect in the component state.
     
     What is the difference between state and props in React?
         - Props are read-only and passed from parent to child components, whereas state is
           managed within the component and can be modified by the component itself.
     
     */
    const [currentAmount, setAmount] = useState(amount);
    const [currentColor, setColor] = useState(color);

    useEffect(() => {
        setColor(color);
    }, [color]);


    useEffect(() => {
        setAmount(amount);
    }, [amount]);

    const onPress = () => setAmount(currentAmount => currentAmount + 1);

    return (
        <View>
            <View style={styles.container}>
                <Text style={[styles.textExample, { color: currentColor }]}>
                    This is from the Text Example Component!
                </Text>
                <Text>
                    With the color: {currentColor}
                </Text>
                <TouchableOpacity style={styles.container} onPress={onPress}>
                    <Text style={[styles.textExample, { color: currentColor }]}>
                        Press here to increment: {currentAmount}
                    </Text>
                </TouchableOpacity>
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
    container: {
        borderRadius: 25,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    textExample: {
        fontWeight: "bold",
        fontSize: 25,
        borderColor: "black",
    },
});
