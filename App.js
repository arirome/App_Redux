import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//REDUX

//Necesitamos el provider para envolver toda la app 
//y cuando lo envuelva hay que pasarle la store por medio de las props
//asi ya estaria enlazada la app

import { Provider } from 'react-redux'
import store from './components/redux/store/store'

//

import HomeView from './components/Home';
import RegistroView from './components/Registro';
import LoginView from './components/Login';


export default function App() {
  // instanciamos nuestro Stack que nos ayudara para crear la navegacion y las pantallas
  const Stack = createNativeStackNavigator();
  
  return (
    <>

<Provider  store={store}>
      <NavigationContainer>
     
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={HomeView} />
          <Stack.Screen name="registro" component={RegistroView} />
          <Stack.Screen name="login" component={LoginView} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      </Provider>
    </>
  );
}