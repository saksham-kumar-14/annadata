import { View, Text, ScrollView } from "react-native";
import Login from "./api/auth/login";
import Register from "./api/auth/register";

export default function Auth({ navigation }){

    return(
        <ScrollView>

            <View>
                <Text>For Customers</Text>
                <Login user='customer' navigation={navigation} />
                <Register user='customer' navigation={navigation} />
            </View>

            <View>
                <Text>For Sellers</Text>
                <Login user='seller' navigation={navigation} />
                <Register user='seller' navigation={navigation} />
            </View>

        </ScrollView>
    )
}