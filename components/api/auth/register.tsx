import { Text, ScrollView, Pressable, TextInput, Image } from "react-native"
import { useState } from "react";

export default function Register({ user, navigation }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [pwd, setPwd] = useState("");
    const [cPwd, setCPwd] = useState("");
    const [pwdType, setPwdType] = useState("password");

    return (
        <ScrollView>

            <Text>Register for {user}</Text>

            <Text>Name</Text>
            <TextInput onChangeText={(e) => { setName(e) }} placeholder="Name"/>
            <Text>Email</Text>
            <TextInput onChangeText={(e) => { setEmail(e) }} placeholder="Email"/>
            <Text>Phone</Text>
            <TextInput onChangeText={(e) => { setPhone(parseInt(e)) }} placeholder="Phone"/>
            <Text>Password</Text>
            <TextInput onChangeText={(e) => { setPwd(e) }} placeholder="password" />
            <Pressable onPress={() => {
                if (pwdType == "password") {
                    setPwdType("text");
                } else {
                    setPwdType("password");
                }
            }}>
                {pwdType == "password" ? 
                <Image source={require("../../../assets/images/eyeOn.png")} />  : 
                <Image source={require("../../../assets/images/eyeOff.png")} /> }
            </Pressable>
            <Text>Confirm Password</Text>
            <TextInput onChangeText={(e) => { setCPwd(e) }} placeholder="password" />
            <Pressable onPress={() => {
                if (pwdType == "password") {
                    setPwdType("text");
                } else {
                    setPwdType("password");
                }
            }}>
                {pwdType == "password" ? 
                <Image source={require("../../../assets/images/eyeOn.png")} />  : 
                <Image source={require("../../../assets/images/eyeOff.png")} /> }
            </Pressable>

            <Pressable onPress={() => {
                navigation.navigate('Main')
            }}>
                <Text>Submit</Text>
            </Pressable>
        </ScrollView>
    )
}