import React from 'react'
import { useTheme } from '@react-navigation/native';
import {
    View,
    Text,
    StyleSheet,
    Image,
    useWindowDimensions,
    TouchableOpacity
} from 'react-native'
import format from 'format-number'
const StockItem = ({ item }) => {
    const { colors } = useTheme()
    const dimensions = useWindowDimensions();
    return (
        <TouchableOpacity style={[styles.container]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.rankContainer}>
                    <Text style={[styles.rank, { color: colors.secondary }]}>{item.market_cap_rank}</Text>

                    <Image source={{ uri: item.image }} style={{ width: 24, height: 24 }} />
                </View>
                <View style={{ flexDirection: dimensions.width >= 768 ? 'row' : 'column', alignItems: dimensions.width >= 768 ? 'center' : 'flex-start' }}>
                    <Text style={[styles.symbol, { color: colors.secondary }]}>{item.symbol.toUpperCase()}</Text>
                    <Text style={[styles.name, { color: colors.secondary, marginHorizontal: dimensions.width >= 768 ? 16 : 0 }]}>{item.name}</Text>
                </View>
                <View>
                    <Text style={[styles.symbol, { color: colors.secondary }]}>{format({prefix:'$', suffix:' MXN'})(item.current_price)}</Text>
                </View>
            </View>
            <View style={{ flexDirection: dimensions.width >= 768 ? 'row' : 'column', alignItems: dimensions.width >= 768 ? 'center' : 'flex-start' }}>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.percentText, { color: colors.secondary }]}>1hr:</Text>
                    <Text style={[styles.percentText, { color: item.price_change_percentage_1h_in_currency.toString().includes('-') ? colors.error : colors.success }]}>{item.price_change_percentage_1h_in_currency.toFixed(2)}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.percentText, { color: colors.secondary }]}>24hr:</Text>
                    <Text style={[styles.percentText, { color: item.price_change_percentage_24h_in_currency.toString().includes('-') ? colors.error : colors.success }]}>{item.price_change_percentage_24h_in_currency.toFixed(2)}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.percentText, { color: colors.secondary }]}>7d:</Text>
                    <Text style={[styles.percentText, { color: item.price_change_percentage_7d_in_currency.toString().includes('-') ? colors.error : colors.success }]}>{item.price_change_percentage_7d_in_currency.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 16,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    symbol: {
        fontSize: 16,
        fontWeight: '600',

    },
    name: {
        fontSize: 12,
        fontWeight: '300',
    },
    rankContainer: {
        marginRight: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rank: {
        fontSize: 12,
        fontWeight: '300',
        marginRight: 8

    },
    percentText: {
        fontSize: 12,
        fontWeight: '300',
        marginHorizontal: 4
    }
})
export default StockItem;

