import { Pressable, ScrollView, Text, TextInput, Image } from "react-native"
import { useState } from "react";

export default function Login({ user, navigation }){

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdType, setPwdType] = useState("password");

    return(
        <ScrollView>
            <Text>Login for {user}</Text>


            <Text>Email</Text>
            <TextInput onChangeText={(e)=>{setEmail(e)}} placeholder="Email"/>
            <Text>Password</Text>
            <TextInput onChangeText={(e)=>{setPwd(e)}} placeholder="password"/>
            <Pressable onPress={()=>{
                if(pwdType == "password"){
                    setPwdType("text");
                }else{
                    setPwdType("password");
                }
            }}>
                {pwdType == "password" ? 
                <Image source={require("../../../assets/images/eyeOn.png")} /> : 
                <Image source={require("../../../assets/images/eyeOff.png")} />}
            </Pressable>

            <Pressable onPress={()=>{
                navigation.navigate("Main")
            }}>
                <Text>Submit</Text>
            </Pressable>
        </ScrollView>
    )
}