import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const HealthCheckup = () => {
  return (
    <View style={styles.contain}>
      <View style={styles.cardContainer}>
        <Pressable android_ripple={{
          color: '#bfafff55',
          foreground: true
        }}
        >
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={styles.header}>
                <Icon name='syringe' size={20} color='#fff' />
                <Text style={{ color: '#fff', fontSize: 16, zIndex: 100 }}>Revisión de salud</Text>
              </View>
              <Text style={styles.footer}><Icon name='clock' size={15} color='#ebe4ff' /> 09:00 AM - 16 Agosto, 2023</Text>
            </View>
            <View style={styles.img}>
              <Image source={require('../assets/vet.png')} style={{ width: 40, height: 40 }} />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default HealthCheckup

const styles = StyleSheet.create({
  contain: {
    paddingHorizontal: 20
  },
  cardContainer: {
    overflow: 'hidden',
    borderRadius: 20,
    shadowColor: '#77d6ad',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 30
  },
  card: {
    backgroundColor: '#9391ff',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center'
  },
  footer: {
    color: '#ebe4ff'
  },
  img: {
    backgroundColor: '#77d6ad55',
    borderRadius: 50,
    padding: 10,
    transform: [{ translateY: 20 }, { scale: 2.8 }]
  }
})
