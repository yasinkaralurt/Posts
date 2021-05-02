import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PrivateNavigationProp } from '../../navigation/types'
import { PrivateRoutes } from '../../navigation/routes'

const PostItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(PrivateRoutes.PostDetail, { data: item.id })} style={styles.container}>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default PostItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 0.5,
        borderRadius: 5,
    }
})
