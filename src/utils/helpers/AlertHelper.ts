import { Alert } from "react-native";
import { GetTranslation, TranslationKey } from "./TranslateHelper";

type MessageProps = {
    title?: string,
    message?: string,
    onPress?: () => void,
}
export function ShowDefaultMessage(data: MessageProps, successful = true) {
    var message = ''
    if (successful)
        message = data.message || GetTranslation(TranslationKey.Dialog.Successful)
    else
        message = data.message || GetTranslation(TranslationKey.Dialog.Unsuccessful)
    Alert.alert(data.title || '', (message), [{ text: GetTranslation(TranslationKey.Button.OK), onPress: data.onPress }]);
}
