import React from 'react'
import { useTheme } from '@react-navigation/native';
import {
    FlatList,
    View,
} from 'react-native'
import StockItem from './stockItem'
import Title from './title';

const StockList = (props) => {
    console.log('props 2', props.items)
    const { colors, dark } = useTheme()
    return (
        <>
            <Title>Cryptocurrencies</Title>
        <FlatList
            style={{flex:1,}}
            data={props.items}
            renderItem={({ item }) => <StockItem item={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{backgroundColor:colors.border, opacity:dark ? 0.25: 1, height:2,width:'100%', alignSelf:'flex-end', marginLeft:24}}/>}
            />
            </>
    )
}

export default StockList;