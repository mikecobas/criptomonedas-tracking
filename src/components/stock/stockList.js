import React from 'react'
import {
    FlatList,
    View,
    Text
} from 'react-native'
import StockItem from './stockItem'

const StockList = (props) => {
    console.log('props 2' , props.items)
    return (
        <FlatList
            style={{flex:1,}}
            data={props.items}
            renderItem={({ item }) => <StockItem item={item} />}
            keyExtractor={item => item.id}
        />
    )
}

export default StockList;