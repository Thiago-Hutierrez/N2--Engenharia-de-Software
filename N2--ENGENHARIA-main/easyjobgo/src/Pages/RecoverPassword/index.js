import React , {Component} from 'react';
import { View, KeyboardAvoidingView , StyleSheet, TextInput , TouchableOpacity, Text, Image } from 'react-native';



export default class RecoverPassword extends Component{
    constructor(props) {
        super(props)
        this.state = {
          email: null
        }
        this.verifyEmail = this.verifyEmail.bind(this);
            }
     verifyEmail(){
        if(!this.state.email){
          alert('O campo Email deve ser preenchido!')
          return
        }
    }
    render(){

      return(
        <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logoL} >
       <Image style={{width: 200, height: 200 , alignSelf: 'center'}} 
        source={ require('../../assets/easyjobgo.jpg')}
        /> 
        
        <Text style={{fontSize: 30 ,color:'#ffff', alignSelf: 'center'}}>Recuperação de Senha</Text>
        
      </View>

    <View style={styles.container}>
    <Text style={{fontSize: 20,color:'#ffff', alignSelf: 'center', marginVertical: 30}}>Informe o Email da conta</Text>
      <TextInput style={styles.input}
      value={this.state.email}
      placeholder="Email"
      autoCorrect={false}
      onChangeText={(email) => {this.setState({email: email}) }}
      />

      <TouchableOpacity style={styles.btnsubmit} onPress={() => this.verifyEmail()}>
          <Text style={styles.submitText}>Enviar</Text>
      </TouchableOpacity>

     </View>
     </KeyboardAvoidingView>

      );

    }
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
  input:{
     backgroundColor:'#fff',
     width: '90%',
     marginBottom:15,
     color: '#222',
     fontSize: 17,
     borderRadius:7,
     padding:10,
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