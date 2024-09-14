import { Pressable, StyleSheet } from 'react-native';
import { Text , View , Image } from 'react-native';
import { ArrowRightCircleIcon } from 'react-native-heroicons/mini';

export default function GetStarted({ navigation }) {

  return (
        <View style={styles.parentContainer} >

          <View>
          <Image source={require('../assets/images/annadata.png')} style={styles.tinyLogo} />
            <Image source={require('../assets/images/logo.png')} style={styles.bigLogo} />
            <Image source={require('../assets/images/namaskar.png')} style={styles.tinyLogo} />
          </View>
        
          <View style={styles.container1}>
            <Text style={styles.container1Child}>अन्नदाता</Text>
            <Text style={styles.container1Child}>ANNADATA</Text>
          </View>

          <View style={styles.btnContainer}>
            <Pressable
            accessibilityLabel='Learn More'
            style={styles.btn1}
            onPress={()=>{
              navigation.navigate('Auth');
            }}
            >
              <Text style={{
                color: 'rgb(0,175,0)',
                fontWeight: 700,
                fontSize: 30
              }} > Get Started </Text>          
            </Pressable>   

            <Pressable
            onPress={()=>{
              navigation.navigate("Auth")
            }}
            style={styles.btn2}
            >
              <ArrowRightCircleIcon style={{
                height: 75,
                width: 75
              }} />
            </Pressable>

          </View>
        
        </View>

  );
}

const styles = StyleSheet.create({
  container1Child:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 35,
    fontWeight : 'bold',
    color: 'rgb(50,150,50)'
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bigLogo: {
    width: 200,
    height: 200
  },
  tinyLogo: {
    width: 150,
    height: 150
  },
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btn1: {
    borderWidth: 5,
    borderRadius: 30,
    borderColor: 'rgb(50,150,50)',
    color: 'rgb(50,150,50)',
    backgroundColor: 'white',
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 4,
    paddingRight: 4,
    marginLeft: 20,
    marginRight: 20
  },
  btn2: {
    borderRadius: 30,
    borderColor: 'rgb(50,150,50)',
    color: 'rgb(50,150,50)',
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 20,
    marginRight: 20
  }
})
