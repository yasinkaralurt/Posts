import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { PrivateNavigationProp } from '../../navigation/types'
import { PrivateRoutes } from '../../navigation/routes'

type SettingsScreenProps = { navigation: PrivateNavigationProp<PrivateRoutes.Settings> }

const SettingsScreen = ({ navigation }: SettingsScreenProps): React.ReactElement => (
    <View style={styles.page}>
        <Text>SETTINGS</Text>
        <Button title="back" onPress={() => navigation.goBack()} />
    </View>
)

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SettingsScreen
