import React, {useState} from 'react';
import {
    TextInput, 
    View, 
    Text, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
    } from  'react-native'
import ResultImc from "./ResultImc/Index"
import styles from "./style"

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [classificacao, setClassificacao] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [errorMessageAltura, setErrorMessageAltura] = useState(null)
    const [errorMessagePeso, setErrorMessagePeso] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator(){
        let classificacao = ''; //Variavel para guardar a classificação do peso
        let heightFormat = height.replace(",", ".") //caso o usuario digite o numero com virgula, ira mudar para ponto
        let totalImc = ((weight/(heightFormat*heightFormat)).toFixed(2)) //Calculado o IMC, o toFixed é para ter apenas 2 casas decimais
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc }]) //Guardar o totalImc no Array
        setImc(totalImc)
        if (totalImc < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (totalImc < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (totalImc < 30){
            classificacao = 'levemente acima do peso.';
        }else if (totalImc < 35){
            classificacao = 'com obesidade grau I.';
        }else if (totalImc < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
        setClassificacao(classificacao)
    }

    function verificationImc(){ //caso tente calcular e o campo esteja nulo ira alertar o usuario
        if(imc == null){
            Vibration.vibrate();
            setErrorMessagePeso(null)
            setErrorMessageAltura(null)
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validationImc(){ //verificar se os valores de altura e peso nao estao vazios
        if((height > 2.50 || height < 0.20) && weight != null && height != null){ //verificando se a altura é existente
            setHeight(null)
            setErrorMessage(null)
            setErrorMessagePeso(null)
            setErrorMessageAltura("Altura inexistente*")
        }
        else if((weight < 0 || weight > 200) && weight != null && height != null){
            setWeight(null)
            setErrorMessage(null)
            setErrorMessageAltura(null)
            setErrorMessagePeso("Peso inexistente*")
        }
        else if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            setErrorMessageAltura(null)
            setErrorMessagePeso(null)
        }else{
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e altura")
        } 
    }
    //Pressable transforma tudo em area clicavel, e o keyboard.dismiss faz o teclado sumir
    return(
        <View style={styles.formContext}>
            {imc == null ?  
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.errorMessage}>{errorMessageAltura}</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Digite a sua altura" keyboardType="numeric"></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.errorMessage}>{errorMessagePeso}</Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Digite seu peso" keyboardType="numeric"></TextInput>
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>
            : 
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <Text style={styles.classificacaoMessage}>{classificacao}</Text>
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            } 
            <FlatList showsVerticalScrollIndicator={false} style={styles.listImcs} data={imcList.reverse()} renderItem={({item}) => {
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item) => {
                item.id
            }}
            />  
        </View> 
    )
}