import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: 'red' }]}>
      <View style={{ backgroundColor: 'red' }}>
        <Text style={styles.title}>Home</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'space-between'
  }
})
