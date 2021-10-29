import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        bottom: 0,
        backgroundColor: "#d3d3d3",
        marginTop: 5,
        marginBottom: 5,
        alignItems: "center",  
        paddingTop: 10,
        borderRadius: 30,
    },
    form:{
        width: "100%",
        paddingTop: 20,
        
    },
    formLabel:{
        color: "#000000",
        fontSize: 20,
        paddingLeft: 20,
    },
    input:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#dcdcdc",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#120A8F",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc:{
        width: "100%",
        height: "50%"
    },
    classificacaoMessage:{
        fontSize: 20,
        color: "#120A8F",
        alignItems: "center",
        justifyContent: "center",
    },
    listImcs:{
        marginTop: 20, 
    },
    resultImcItem:{
        fontSize: 24,
        color: "#120A8F",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },
    textResultItemList:{
        color: "#120A8F",
        fontSize: 16,
    },
})

export default styles