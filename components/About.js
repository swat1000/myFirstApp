import React from 'react'
import { View, Text, Button, Alert, TextInput } from 'react-native'

export default function About(props) {
    
    return (
        <View style={{
            marginTop: 350,


        }}>
            <Text style={{ color: "red", textAlign: "center" }}>This my about page {props.name}</Text>
            <Button title='click me'
                onPress={() => Alert.alert("Hey hi how are u??")}
            ></Button>
            <Text nativeID="formLabel">Name</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
        
                }}
                defaultValue="Enter Your Name"
            />
        </View>
    )
}
