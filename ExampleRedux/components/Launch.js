import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    }
});

class Launch extends React.Component {

	constructor(props) {
		super(props);
		console.log(props);
	}

    render(){

		const { state, increment, decrement } = this.props;

		console.log("Props 2: ", this.props, state, increment, decrement);

        return (
            <View {...this.props}  style={styles.container}>
                <Text>Launch page</Text>

				<Text>{state.count}</Text>

				<Button onPress={increment}>Increment</Button>

                <Button onPress={()=>Actions.login({data:"Custom data", title:"Custom title" })}>Go to Login page</Button>
                <Button onPress={Actions.register}>Go to Register page</Button>
                <Button onPress={Actions.register2}>Go to Register page without animation</Button>
                <Button onPress={()=>Actions.error("Error message")}>Popup error</Button>
                <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
               <Button onPress={Actions.pop}>back</Button>
            </View>
        );
    }
}

module.exports = Launch;
