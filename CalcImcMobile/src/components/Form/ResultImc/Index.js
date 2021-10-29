import React from 'react';
import {View, Text, Share, TouchableOpacity} from  'react-native'
import styles from './style'

export default function ResultImc(props){

    const onShare = async() =>{
        const result = await Share.share({ //quando tiver o resultado vai se exibido a msg
            message: "Meu imc é: " + props.resultImc,
        })
    }

    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View style={styles.boxSharebutton}>
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}