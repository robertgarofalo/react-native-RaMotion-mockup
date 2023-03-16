import { useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const images = [
  { image: require('../../assets/scroll4.avif'),
    title: 'Supplements' 
  },
  { image: require('../../assets/scroll1.jpeg'),
    title: 'Meals' 
  },
  { image: require('../../assets/scroll2.jpeg'),
    title: 'Exercises' 
  },
  { image: require('../../assets/scroll3.jpeg'),
    title: 'Accessories' 
  },
]
const screenWidth = Dimensions.get('window').width

function SignedOutStack({ setIsSignedIn }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
        {images.map((item, index) => {
        return (
        <ImageBackground key={`screen_${index}`} source={item.image} resizeMode="cover" style={styles.backgroundImage}>
          <SafeAreaView style={styles.container}>
            <View></View>
            <View style={styles.textContainer}>
              <Text style={styles.textContainer.heading}>{item.title}</Text>
              <Text style={styles.textContainer.description}>
                Workout plans designed to help you achieve your fitness goals - 
                whether losing weight or building muscle
              </Text>
            </View>
            <View>
              {/* Fake Container for flex space   */}
            </View>
          </SafeAreaView>
        </ImageBackground>
        )
})}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainer.indicatorRow}>
        {images.map((item, index) => (
            <FAIcon
              key={`item_${index}`} 
              style={[
                styles.bottomContainer.indicatorRow.circle,
                index !== currentImageIndex ? styles.bottomContainer.indicatorRow.inactive : '' 
              ]}
              name="circle" 
              size={20}
              />
              ))}
          </View>
          <View style={styles.bottomContainer.buttonRow}>
            <TouchableOpacity style={styles.bottomContainer.buttonRow.login}>
              <Text style={styles.bottomContainer.buttonRow.loginText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomContainer.buttonRow.signup}>
              <Text style={styles.bottomContainer.buttonRow.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
      </View>
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
    heading: {
      fontSize: 42,
      fontWeight: 'bold',
      color: '#fff',
    },
    description: {
      color: '#fff'
    }
  },
    bottomContainer: {
    position: 'absolute', 
    bottom: 100, 
    paddingHorizontal: 50,
    // backgroundColor: 'red',
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    indicatorRow: {
      flexDirection: 'row',
      // backgroundColor: 'pink',
      circle: {
        color: '#fff',
        marginHorizontal: 5,
        fontSize: 11, 
      },
      inactive: {
        opacity: 0.5
      }
    },
    buttonRow: {
      flexDirection: 'row',
      paddingTop: 40,
      width: '95%',
      justifyContent: 'space-between',
      login: {
        borderRadius: 30,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      loginText: {
        color: '#fff', 
        paddingHorizontal: 35, 
        paddingVertical: 8
      },
      signup: {
        backgroundColor: '#fff',
        borderRadius: 30,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
      },
      signupText: {
        color: '#000', 
        paddingHorizontal: 35, 
        paddingVertical: 8
      }

    },
  }
})