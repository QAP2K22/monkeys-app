import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MinMax from './components/MinMax';
import NumeroAleatorio from './components/NumeroAleatorio';
import Buttons from './components/Buttons';
import Form from './components/Form';
import RandomNumberPage from './components/RandomNumberPage';

export default function App() {
  const Tab = createBottomTabNavigator();

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.tinyLogo}
          source={require("./assets/adaptive-icon.png")}
        />
        <Text>Salve!!</Text>
      </View>
    );
  }

  function ComponentsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/*  <Image
          style={styles.tinyLogo}
          source={require("./assets/adaptive-icon.png")}
        />
        <Text>Salve!!</Text> */}
        <NumeroAleatorio min={1} max={20} />

        <MinMax min={2} max={3} />
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  function ButtonsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Buttons/>
      </View>
    );
  }

  function FormScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <RandomNumberPage/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBKkeDkGCU-gGK3tL8-ZOngL_SIIgaz0Yns8e-9O7tUZYBvZ0pRS7SDKZ3i0UFSd4kJM&usqp=CAU" }} resizeMode="cover" style={styles.image}>
        <View style={styles.textCenter}>
          <Text style={styles.Text}>OMG! 😉</Text>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
      <NavigationContainer>
        <Tab.Navigator detachInactiveScreens={false}>
          <Tab.Screen name="Inicio" component={HomeScreen} />
          <Tab.Screen name="Componentes" component={ComponentsScreen} />
          <Tab.Screen name="Buttons" component={ButtonsScreen} />
          <Tab.Screen name="Form" component={FormScreen} />
          <Tab.Screen name="Configurações" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      {/*   <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,

    justifyContent: 'center',
  },
  textCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#FFF',
    fontSize: 80,
  },
  tinyLogo: {
    width: 200,
    height: 280,
  },
});