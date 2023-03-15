import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'

const image1 = require('../../assets/1.png')

const storeData = [
  {
    title: 'Training Plan',
    image: require('../../assets/1.png')
  },
  {
    title: 'Meal Plan',
    image: require('../../assets/2.png')
  },
  {
    title: 'Supplement Plan',
    image: require('../../assets/3.png')
  },
  {
    title: 'Training Accessories',
    image: require('../../assets/4.png')
  },
]

const BoxItem = ({title, image}) => {
  return (
    <View style={styles.box}>
      <ImageBackground 
      source={image} 
      resizeMode="cover" 
      style={styles.image}
      imageStyle={styles.imageStyles}
      >
        <Text style={styles.boxTitle}>{title}</Text>
      </ImageBackground>
    </View>
  )
}

const Store = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{route.name}</Text>
      <FlatList 
        data={storeData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <BoxItem title={item.title} image={item.image}
        keyExtractor={(item, index) => `item_${index}`}
        />}
      />
    </View>
  )
}
export default Store
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    height: 160,
    marginVertical: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  imageStyles: {
    borderRadius: 10,
  },
  boxTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }

})