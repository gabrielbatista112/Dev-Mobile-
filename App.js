import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

//login


export default function App() {

const [email, setEmail] = useState('');
const [Senha, setSenha] = useState('');
const [aparecer, setAparecer] = useState('');

function setClicar () {

setAparecer(!aparecer);

}

return (

<View style={styles.container}>
<Text style={{fontSize: 50, fontStyle: 'italic', color: 'white'}}>VaultPass</Text>

<Text style={styles.text}>Acesse a sua conta</Text>


<View style={styles.input}>
<Fontisto name="email" size={15} color="grey" />
<TextInput
placeholder=' Email'
onChangeText={setEmail}
/>
</View>


<View style={styles.input}>
<Feather name="lock" size={15} color="grey" />
<TextInput
placeholder=' Senha'
onChangeText={setSenha}
/>

</View>

<TouchableOpacity style={styles.button}>
<Button color = 'white' title='login' onPress={setClicar}/>
</TouchableOpacity>

{aparecer ?
<Text style={styles.text}>Acesso liberado...</Text>
:
<Text></Text>}

</View>

);
}

const styles = StyleSheet.create({


container: {

flex: 1,
backgroundColor: '#008080',
alignItems: 'center',
justifyContent: 'center',

},

text: {
color: 'white',


},

input:{
flexDirection: 'row',
backgroundColor: 'white',
borderWidth: 1,
borderRadius: 10,
borderColor: '#777',
padding: 8,
margin: 10,
width: 200,
paddingHorizontal: 16,

},

button:{

backgroundColor: '#66CDAA',
width: 130,
height: 40,
borderRadius: 30,





},

});