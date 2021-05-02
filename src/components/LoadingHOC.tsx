import React from "react";
import { StyleSheet, View, ActivityIndicator, Modal } from "react-native";

const LoadingHOC = (Comp: any) => ({ loading, children, ...props }) => {
    return (
        <>
            {
                loading && <Modal transparent={true} >
                    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                        <ActivityIndicator size="large" color="red" />
                    </View>
                </Modal>
            }
            <Comp {...props}>{children}</Comp>

        </>
    )
}

export default LoadingHOC;