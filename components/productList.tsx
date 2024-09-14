import { ScrollView, View, Pressable, StyleSheet, Text, Modal, Button, Image} from "react-native";
import productList from "./api/productApi";
import { useState } from "react";
import { BackspaceIcon } from "react-native-heroicons/mini";
import sellers from "./api/sellers";

export default function ProductList({navigation}){

    const [visibility, setVisibility] = useState(false);
    const [choice, setChoice] = useState(0);
    const [productDetails, setProductDetails] = useState({});
    const [selectedSellers, setSelectedSellers] = useState([]);

    // products pop out
    function getProductDetails(id:Number){
        productList.map((e)=>{
            if(e.id == id){
                setProductDetails(e);
            }
        })
    }


    function getSellers(productId:Number){
        let r = [];

        sellers.map((e)=>{
            e.items.map((item)=>{
                if(item.id == productId){
                    r.push({
                        name: e.name,
                        phone: e.phone,
                        location: e.location,
                        maxQtyKg: item.maxQtyKg,
                        ratePerKg: item.ratePerKg
                    })
                }
            })
        })

        setSelectedSellers(r);
    }





    return(
        <ScrollView>
            <ScrollView style={styles.container}>
                {productList.map((e)=>{
                    let title = e.name + "/" + e.hindiName
                    let imgSrc = "../assets/images/" + e.name + ".jpg"
                    
                    return(
                        <View style={styles.containerchild} key={e.id}>
                            <Button
                                title={title}
                                onPress={()=>{
                                    setVisibility(true);
                                    setChoice(e.id);
                                    getProductDetails(e.id);
                                    getSellers(e.id);
                                }}
                            >
                            </Button>
                        </View>
                    )
                })}

                <Modal visible={visibility} onRequestClose={()=>{
                    setVisibility(false);
                }}
                animationType="slide"
                presentationStyle="pageSheet">
                    {visibility ? 

                    <ScrollView>
                        <Pressable onPress={()=>{
                            setVisibility(false); 
                        }}>
                            <BackspaceIcon />
                        </Pressable>

                        <Text>Results for {productDetails.name}/{productDetails.hindiName}</Text>
                        {selectedSellers.map((e, idx)=>{
                            return(
                                <View key={idx}>
                                    <Text>Name: {e.name}</Text>
                                    <Text>rate/kg: {e.ratePerKg}</Text>
                                    <Text>Max Qty: {e.maxQtyKg}</Text>
                                    <Text>Contact: {e.phone} </Text>
                                    <Button
                                    onPress={()=>{
                                        navigation.navigate('Map');
                                        setVisibility(false);
                                    }}
                                    title="See Location">
                                    </Button>
                                    <Button
                                    title="BUY">
                                    </Button>
                                </View>
                            )
                        })}

                    </ScrollView>

                    :
                    <ScrollView></ScrollView>}

                </Modal>

            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        height: '100%'
    },
    containerchild: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'center',
        padding : 15,
        borderWidth: 3,
        borderRadius: 15,
        margin: 15,
    }
});