
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './src/screens/SearchScreen';
import BranchDetailScreen from './src/screens/BranchDetailScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Search'
          initialRouteName="Search"
          component={SearchScreen}
          options={{ title: 'Msigma Infotech' }}
        />
        <Stack.Screen
          name="BranchDetail"
          component={BranchDetailScreen}

          options={{
            title: 'Branch Details', headerBackTitle: 'Back'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App