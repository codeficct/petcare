import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Routes from './src/routes/Routes'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
