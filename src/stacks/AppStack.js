import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { Appearance, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';
import ThemeContext from '../context/theme/themeContext';
import { LightTheme } from '../utils/themes/light';
import { DarkTheme } from '../utils/themes/dark';
const Stack = createStackNavigator();

const AppStack = props => {
    const {colors} = useTheme()
    const themeContext = useContext(ThemeContext)
    const { theme, changeTheme } = themeContext
    const [themeDesign, setTheme] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
          if (theme === 'dark') {
            setTheme('dark');
    
          } else {
            setTheme('light');
          }
        })()
    }, [themeDesign])
    
    const change = (type) => {
        changeTheme(type);
        setTheme(type)
    }
    return (
        <NavigationContainer theme={themeDesign === 'dark' ? DarkTheme : LightTheme} >
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    elevation: 0,
                    borderBottomWidth: 1,
                    borderBottomColor:themeDesign === 'dark' ? DarkTheme.colors.secondary : LightTheme.colors.secondary
                },
                headerTintColor:themeDesign === 'dark' ? DarkTheme.colors.secondary : LightTheme.colors.secondary,
                headerRight: () => (<View style={{flexDirection:'row'}}>
                    {/* <TouchableOpacity onPress={() => { change('light')}} style={{marginHorizontal:8}}>
                        <Feather name="sliders" size={24} color={themeDesign === 'dark' ? DarkTheme.colors.secondary : LightTheme.colors.secondary} />
                    </TouchableOpacity> */}
                    {themeDesign === 'dark' ?
                    <TouchableOpacity onPress={() => { change('light')}} style={{marginHorizontal:8}}>
                        <Feather name="sun" size={24} color={DarkTheme.colors.secondary} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => { change('dark')}} style={{marginHorizontal:8}}>
                        <Feather name="moon" size={24} color={LightTheme.colors.secondary} />
                    </TouchableOpacity>}
                    </View>)
            }}>
                <Stack.Screen name="Monedas" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;