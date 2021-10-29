import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 20,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberImc:{
        fontSize: 48,
        color: "#120A8F",
        fontWeight: "bold",
    },
    information:{
        fontSize: 18,
        color: "#120A8F",
        fontWeight: "bold",
    },
    boxSharebutton:{
        width: "100%",
        alignItems: "center",
        marginTop: 15,
    },
    shared:{
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
})

export default styles