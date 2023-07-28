import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Routes from './src/routes/Routes'
import { LogBox } from 'react-native'
import { AuthStateProvider } from './src/context/authContext'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

LogBox.ignoreAllLogs()

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthStateProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </AuthStateProvider>
    </SafeAreaProvider>
  )
}

export default App
