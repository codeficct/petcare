import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Routes from './src/routes/Routes'

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