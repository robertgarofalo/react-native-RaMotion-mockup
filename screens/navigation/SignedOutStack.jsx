import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const images = [
  { image: require('../../assets/1.png') },
  { image: require('../../assets/2.png') },
  { image: require('../../assets/3.png') },
  { image: require('../../assets/4.png') },
]

const screenWidth = Dimensions.get('window').width

function SignedOutStack({ setIsSignedIn }) {

  return (
    // <View style={styles.container}>
      <ScrollView 
      style={styles.container}
      horizontal={true} 
      pagingEnabled={true}
      scrollEnabled={true}
      decelerationRate={0}
      snapToInterval={screenWidth} //your element width
      snapToAlignment={"center"}
      >
        <ImageBackground source={require('../../assets/scroll3.jpeg')} resizeMode="cover" style={styles.backgroundImage}>
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Image style={styles.headerLogo} source={require('../../assets/v2.png')}/>
              <View style={styles.skipContainer}>
                <Text style={styles.skipText}>SKIP </Text>
                  <FAIcon 
                  style={styles.skipAngle}
                  name='angle-right' 
                  size={20} 
                  />
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
        {/* <Image source={require('../../assets/scroll3.jpeg')} resizeMode="cover" style={styles.image}/>
        <Image source={require('../../assets/scroll1.jpeg')} resizeMode="cover" style={styles.image}/>
        <Image source={require('../../assets/scroll2.jpeg')} resizeMode="cover" style={styles.image}/> */}
      </ScrollView>
    // </View>
  )
}

export default SignedOutStack

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: screenWidth,
    paddingHorizontal: 25
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
    // backgroundColor: 'red'
  },
  headerLogo: {
    width: 30,
    height: 30
  },
  skipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  skipText: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#e6e6e6',
    
  },
  skipAngle: {
    marginBottom: 2,
    fontSize: 16,
    color: '#e6e6e6',
    fontWeight: 'bold'
  }
})