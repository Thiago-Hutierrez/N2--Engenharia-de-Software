import React from 'react';
import { View, Image , StyleSheet, TouchableOpacity, Text} from 'react-native';


export default function Emailconfirmation(){

    return(
       <View style={styles.background}>
          <View  style={styles.logoL} >
            <Image style={{width: 350, height: 350, alignSelf:'center'}}
            source={ require('../../assets/easyjobgo.jpg')}
            /> 

            <Text style={{fontSize: 18,color:'#ffff', alignSelf: 'center'}}>Enviamos a confirmação para o Email</Text>
            <Text style={{fontSize: 17,color:'#ffff', alignSelf: 'center'}}>mostra@gmail.com</Text>


            </View>
       

            <View style={styles.container}>

            <TouchableOpacity style={styles.btnsubmit} onPress={() => {}}>
            <Text style={styles.submitText}>Reenviar Email</Text>
            </TouchableOpacity>

            </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
  background:{
     flex:1,
     alignItems:'center',
     justifyContent: 'center',
     backgroundColor: '#212121'
},
  logoL:{
      flex:1,
      paddingTop: 80,
},
  container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  width: '90%',
  marginVertical:50 
  
},

btnsubmit:{
  backgroundColor:'#35AAFF',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent:'center',
  borderRadius: 7,
  
},
submitText:{
  color:'#fff',
  fontSize:18
},

})