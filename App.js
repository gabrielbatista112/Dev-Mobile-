import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

//home

export default function App() {



return (

<ScrollView>

<View style={styles.container1}>

<View style={styles.apresentacao}>

<View style={styles.iconGit}>

<Feather name="lock" size={80} color="black" />

</View>

<View>

<Text style={styles.boldText}>VaultPass</Text>
<Text style={{fontSize: 10, color: 'black'}}>Conosco você se sente mais seguro</Text>

</View>
</View>

<Button  title='Armazenar senha' color='white'/>

<View style={styles.box}>
<View style={styles.text}>
<Text style={{fontSize: 25}}>Facebook</Text>
<TextInput
placeholder="senha"  />

</View>

<View style={styles.icons}>


<Entypo name="facebook" size={50} color="black" />

</View>
</View>


<View style={styles.box}>
<View style={styles.text}>
<Text style={{fontSize: 25}}>Instagram</Text>
<TextInput
placeholder="senha"  />

</View>

<View style={styles.icons}>


<AntDesign name="instagram" size={50} color="black" />

</View>
</View>


<View style={styles.box}>
<View style={styles.text}>
<Text style={{fontSize: 25}}>Twitter</Text>
<TextInput
placeholder="senha"  />

</View>

<View style={styles.icons}>


<AntDesign name="twitter" size={50} color="black" />

</View>
</View>


<View style={styles.box}>
<View style={styles.text}>
<Text style={{fontSize: 25}}>GitHub</Text>
<TextInput
placeholder="senha"  />

</View>

<View style={styles.icons}>


<AntDesign name="github" size={50} color="black" />

</View>
</View>


<View style={styles.box}>
<View style={styles.text}>
<Text style={{fontSize: 25}}>LinkedIn</Text>
<TextInput
placeholder="senha"  />

</View>

<View style={styles.icons}>


<AntDesign name="linkedin-square" size={50} color="black" />

</View>
</View>



</View>

</ScrollView>

);

}

const styles = StyleSheet.create({

container1: {
flex: 1,
backgroundColor: "#008080",
justifyContent: "flex-start",

},

box: {
padding: 20,
backgroundColor: "lightgrey",
margin: 20,
borderRadius: 8,
alignItems: "center",
flexDirection: "row",
},

text: {
flex: 1,
marginRight: 10,
},

icons: {
width: 50,
flexDirection: "row",
},

apresentacao: {
padding: 20,
margin: 20,
borderRadius: 8,
alignItems: "center",
flexDirection: 'row',
justifyContent: 'space-around',
},

boldText: {
fontWeight: 'bold',
fontSize: 25
},




});
