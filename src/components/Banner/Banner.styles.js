import {StyleSheet, Dimensions} from "react-native"

export default StyleSheet.create({
    container: {
        margin: 10,
    },
    image: {
        height: Dimensions.get("window").height / 5,
        width: Dimensions.get("window").width / 2,
    }
});