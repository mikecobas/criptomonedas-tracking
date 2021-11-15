import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
const StockItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <Text style={styles.name}>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        flex:1
    },
    symbol: {
        fontSize: 16,
        fontWeight: '600',
        color:'#F7F4FB'
    },
    name: {
        fontSize: 12,
        fontWeight: '300',
        color:'#F7F4FB'
    }
})
export default StockItem;

