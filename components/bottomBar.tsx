import { StyleSheet, TouchableHighlight , ScrollView, View, Image } from "react-native";


export default function BottomBar({ navigation }){

    return(
        <ScrollView>
            <View style={styles.container} >
                <TouchableHighlight  onPress={()=>{
                    navigation.navigate('Main');
                }} style={styles.containerChild}>
                    <Image source={require('../assets/images/home.png')} style={styles.logo} />
                </TouchableHighlight>
                <TouchableHighlight  onPress={()=>{
                    navigation.navigate("Cart")
                }} style={styles.containerChild}>
                    <Image source={require('../assets/images/cart.png')} style={styles.logo} />
                </TouchableHighlight>
                <TouchableHighlight  onPress={()=>{
                    navigation.navigate("Chat")
                }} style={styles.containerChild}>
                    <Image source={require('../assets/images/chat.png')} style={styles.logo} />
                </TouchableHighlight >
                <TouchableHighlight  onPress={()=>{
                    navigation.navigate("Profile")
                }} style={styles.containerChild}>
                    <Image source={require('../assets/images/profile.png')} style={styles.logo} />
                </TouchableHighlight >
                

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerChild: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        borderWidth: 1,
        padding: 15,
    },
    containerChildProp: {
        width: '20%'
    },
    logo: {
        width: 50,
        height: 50
    },
  });