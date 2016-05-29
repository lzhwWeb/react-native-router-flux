import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});


class Login extends React.Component {
    render(){
		const { state, increment, decrement } = this.props;
		console.log("Props 2: ", this.props, state, increment, decrement);

        return (
            <View style={[styles.container, this.props.style]}>
                <Text>Login page: {this.props.data}</Text>
				<Text>{state.count}</Text>

				<Button onPress={increment}>Increment</Button>
                <Button onPress={Actions.loginModal2}>Login 2</Button>
                <Button onPress={() => Actions.refresh({title:"Changed title"})}>Change title</Button>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}

export default connect(state => ({
   state: state.counter
 }),
 (dispatch) => ({
   actions: bindActionCreators(actions, dispatch)
 })
)(Login);
