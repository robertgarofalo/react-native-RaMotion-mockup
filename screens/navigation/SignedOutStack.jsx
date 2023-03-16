import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const images = [
  { image: require('../../assets/scroll4.avif'),
    title: 'Accessories' 
  },
  { image: require('../../assets/scroll1.jpeg'),
    title: 'Supplements' 
  },
  { image: require('../../assets/scroll2.jpeg'),
    title: 'Training' 
  },
  { image: require('../../assets/scroll3.jpeg'),
    title: 'Meals' 
  },
]
const screenWidth = Dimensions.get('window').width

function SignedOutStack({ setIsSignedIn }) {

  return (
    <>
    <View style={{flex: 1, position: 'relative'}}>
      <View style={styles.header}>
        <Image style={styles.header.headerLogo} source={require('../../assets/v2.png')}/>
          <View style={styles.header.skipContainer}>
            <Text style={styles.header.skipText}>SKIP </Text>
              <FAIcon 
              style={styles.header.skipAngle}
              name='angle-right' 
              size={20} 
              />
            </View>
          </View>
      <ScrollView 
      horizontal={true} 
      pagingEnabled={true}
      scrollEnabled={true}
      decelerationRate={0}
      snapToInterval={screenWidth}
      snapToAlignment={"center"}
      >
        {images.map(item => (
        <ImageBackground source={item.image} resizeMode="cover" style={styles.backgroundImage}>
          <SafeAreaView style={styles.container}>
            <View></View>
            <View style={styles.textContainer}>
              <Text style={styles.textContainer.heading}>Supplements</Text>
              <Text style={styles.textContainer.description}>
                Workout plans designed to help you achieve your fitness goals - 
                whether losing weight or building muscle
              </Text>
            </View>
            <View >
            </View>
          </SafeAreaView>
        </ImageBackground>
        ))}
      </ScrollView>
      <Text style={{position: 'absolute', bottom: 140, left: 50, color: '#fff'}}>Testing</Text>
    </View>
      </>
  )
}

export default SignedOutStack

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative'
  },
  backgroundImage: {
    height: '100%',
    width: screenWidth,
    paddingHorizontal: 25
  },
  header: {
    position: 'absolute',
    top: 40,
    width: '100%',
    zIndex: 99,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 25,
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
  },
  textContainer: {
    // backgroundColor: 'red',
    heading: {
      fontSize: 42,
      fontWeight: 'bold',
      color: '#fff',
    },
    description: {
      color: '#fff'
    }
  }
})