import React from 'react'
import { StyleSheet, } from 'react-native'
import { Text, View } from '../base/Themed';

const CommentItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <Text>{item.body}</Text>
        </View>
    )
}

export default CommentItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        borderColor: '#00000077',
        borderWidth: 0.5
    }
})
