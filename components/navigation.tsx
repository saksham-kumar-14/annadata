import { View, Text, TextInput, Alert, StyleSheet, Button } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/mini";
import { useState } from "react";
import productList from "./api/productApi";
import sellers from "./api/sellers";

export default function NavigationBar({ navigation}){
    const [search, setSearch] = useState("");
    
    const showAlert = () =>
        Alert.alert(
        'Not found',
        'Not such item found',
        [
            {
            text: 'Ok',
            style: 'cancel',
            },
        ],
        {
            cancelable: true
        },
    );
  

    function searchInput(){
        
        productList.map((e)=>{
            if(e.name == search){
                const id = e.id
                navigation.navigate('Search', {
                    id: id
                })
            }
        })
        showAlert();
    }

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input} onChangeText={(e)=>{
                setSearch(e)
            }} placeholder="Search ..."  />
            <Button
            style = {styles.input}
            title="GO"
            onPress={()=>{
                searchInput();
            }}
            >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input:{
        padding: 10,
        fontWeight: 700,
        fontSize: 25,
        margin: 10,
        
    }
});