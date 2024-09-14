import { ScrollView, View, StyleSheet } from "react-native"
import NavigationBar from "./navigation";
import BottomBar from "./bottomBar";
import ProductList from "./productList";

export default function Main({ navigation }){

    return(
        <ScrollView>
            <View>
                <NavigationBar navigation={navigation}/>
            </View>
            <View>
                <ProductList navigation={navigation} />
            </View>
            <View style={styles.bottomBar}>
                <BottomBar navigation={navigation} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    navigationBar: {
        position: "fixed",
        top: 0,
        width:'100%',
        height: '10%'
    },
    list: {
    },
    bottomBar: {
        position: "fixed",
        bottom: 0,
        width:'100%',
        height: '10%'
    }
});