import { Text, StyleSheet, ScrollView, View, Pressable, Button } from 'react-native';
import productList from '@/components/api/productApi';
import sellers from '@/components/api/sellers';
import NavigationBar from './navigation';
import BottomBar from './bottomBar';

export default function Search({ route, navigation }) {
    let { id } = route.params;
  let productDetails;
  productList.map((e)=>{
    if(e.id == parseInt(id)){
        productDetails = e;
    }
  })

  function getSeller(sellerId:Number, productId:Number){
    let result = {
      name:'',
      ratePerKg: 0,
      maxQtyKg: 0,
      location: {
        longitude:0,
        latitude:0
      },
      phone: 0
    }
    sellers.map((e)=>{
      if(e.id == sellerId){
        e.items.map((item)=>{
          if(item.id == productId){
            result.name = e.name,
            result.ratePerKg = item.ratePerKg,
            result.maxQtyKg = item.maxQtyKg,
            result.location = e.location,
            result.phone = e.phone
          }
        })
      }
    })

    return result;
  }

  return (
    <ScrollView>
        <NavigationBar navigation={navigation} />

        {
            <ScrollView>
                <Text>Result for {productDetails.name} </Text>
                {productDetails.sellers.map((e)=>{
                const seller = getSeller(e.id, productDetails.id);
                
                return(
                    <View key={e.id}>
                        <Text>Name: {seller.name}</Text>
                        <Text>rate/kg: {seller.ratePerKg}</Text>
                        <Text>Max Qty: {seller.maxQtyKg}</Text>
                        <Text>Contact: {seller.phone} </Text>
                        <Button 
                        onPress={()=>{
                          navigation.navigate("Map")
                        }}
                        title="See Location"></Button>
                        <Button title="BUY"></Button>
                    </View>
                )})};
            </ScrollView>
        }

        <BottomBar navigation={navigation} />
    
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
