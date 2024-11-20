import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, StatusBar} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {datasource} from "./Data.js";

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('Letter');
    const [type, setType] = useState('Type');

    return (
        <View>
            <StatusBar/>
            <Text>Letter:</Text>
            <TextInput maxLength={1} style={{borderWidth:1}} onChangeText={(text)=>setLetter(text)}/>
            <RNPickerSelect
            defaultValue={{label: "Vowels", value: "Vowels"}}
            onValueChange={(value)=>setType(value)}
            items={[
                {label: "Vowels", value: "Vowels"},
                {label: "Consonants", value: "Consonants"},
            ]}
            />
            <Button title={"Submit"}
            onPress={()=> {
                let item = {key: letter};
                let indexnum = 1;
                if (type == "Vowels") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home");
            }
        }/>
        </View>
    )
}

export default Add;
