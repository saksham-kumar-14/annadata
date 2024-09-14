import BottomBar from "./bottomBar";
import { View, ScrollView, StyleSheet } from "react-native";

export default function Chat({ navigation }){

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.bottomBar}>
                    <BottomBar navigation={navigation} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    bottomBar: {
        position: "fixed",
        bottom: 0,
        width:'100%',
        height: '10%'
    }
});