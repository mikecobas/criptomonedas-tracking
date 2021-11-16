import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView, FlatList, View, Platform } from 'react-native';
import { getQuote } from '../utils/api/api';
import StockList from '../components/stock/stockList';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
    const { colors, dark } = useTheme();
    const [data, setData] = useState()
    useEffect(() => {
        (async () => {
            const req = await getQuote('usd');
            setData(req)
        })()
    }, [])
    return (
        <SafeAreaView style={[styles.container, {backgroundColor:colors.backgroundColor}]}>
            <StockList items={data}/>
            <StatusBar style={dark? 'light' : 'dark'} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:Platform.OS ==='android' ? 20: 0,
      
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 8,

    },
});

export default HomeScreen;