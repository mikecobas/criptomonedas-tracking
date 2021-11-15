import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View, Platform } from 'react-native';
import { getQuote } from '../utils/api/api';
import StockList from '../components/stock/stockList';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
    const [data, setData] = useState()
    useEffect(() => {
        (async () => {
            const req = await getQuote();
            setData(req.data)
        })()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <StockList items={data} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:Platform.OS ==='android' ? 20: 0,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 8,
        backgroundColor:"#170B27"
    },
});

export default HomeScreen;