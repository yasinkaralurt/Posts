import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
