import React from 'react';
import { useTheme } from '@react-navigation/native';
import {
    Text,
    StyleSheet
} from 'react-native'

const Title = (props) => {
    const { colors, dark } = useTheme()
    return (
        <Text style={[styles.title, {color:colors.secondary}]}>
        {props.children}
        </Text>
    )
}
const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontSize:24
    }
})
export default Title;