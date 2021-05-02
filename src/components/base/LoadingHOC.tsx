import React from "react";
import { ActivityIndicator, Modal } from "react-native";
import { View, ScrollView } from "../base/Themed";

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

export const LoadingView = LoadingHOC(View);

export const LoadingScroll = LoadingHOC(ScrollView);


export default LoadingHOC;