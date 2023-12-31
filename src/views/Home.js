import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HealthCheckup from '../components/HealthCheckup'
import Pets from '../components/Pets'
import Footer from '../components/Footer'
import { useAuth } from '../hooks/useAuth'
import { useCallback, useState } from 'react'

const Home = () => {
  const { googleAuth } = useAuth()
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 1000)
  }, [])
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >
          <View style={styles.header}>
            <Text style={styles.title}>Hola <Text style={{ fontWeight: '700' }}>{googleAuth.name}</Text>,</Text>
            <Text style={styles.subTitle}>¡Cuidemos a tus lindas mascotas!</Text>
          </View>
          {/* <Nav /> */}
          <HealthCheckup />
          <Pets isLoading={refreshing} />
          <Footer />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f7f9fc'
  },
  header: {
    paddingLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: '#2d2a45'
  },
  subTitle: {
    color: '#8f95b7',
    fontSize: 18,
    fontWeight: '300',
    marginTop: 5
  }

})
