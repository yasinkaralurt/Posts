import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconArrowBack from "./IconArrowBack";

const Header = ({ title, navigation }) => {

    return (
        <View style={styles.container}>
            <IconArrowBack onPress={() => navigation.goBack()} style={{ marginHorizontal: 20 }} />
            <Text style={{ position: 'absolute', right: 60, left: 60, textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70
    }
})
