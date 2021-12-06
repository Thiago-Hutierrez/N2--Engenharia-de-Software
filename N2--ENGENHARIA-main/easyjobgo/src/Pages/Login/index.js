import Checkbox from 'expo-checkbox';
import React ,  {Component} from 'react';
import {View, KeyboardAvoidingView, Image , StyleSheet, TextInput , TouchableOpacity, Text} from 'react-native';

export default class Login extends  Component{
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      senha: null,
      isChecked:false,
    }
    this.checkfields = this.checkfields.bind(this);
  }
    checkfields(){
      if (!this.state.email || !this.state.senha) {
        alert('Todos os campos devem ser preenchidos!')
        return
    }
  }
  
render() {
 
  /*const [isChecked, setChecked] = useState(false);*/
  
    return(
      
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logoL} >
        <Image style={{width: 250, height: 250 , flex: 1}}
        source={ require('../../assets/easyjobgo.jpg')}
        /> 
        <Text style={{fontSize: 40,color:'#ffff', alignSelf: 'center'}}>EasyJobGO</Text>
        
      </View>

    <View style={styles.container}>
      <TextInput style={styles.input}
      value={this.state.email}
      placeholder="Email"
      autoCorrect={false}
      onChangeText={(email) => {this.setState({email: email}) }}
      />

      <TextInput style={styles.input}
      value={this.state.senha}
      placeholder="Senha"
      autoCorrect={false}
      onChangeText={(senha) => {this.setState({senha: senha})}}
      secureTextEntry={true}
      />



      <View style={styles.botoesup}>
        <Checkbox style={styles.checkbox} value={this.state.isChecked} onValueChange={(isChecked) => {this.setState({isChecked : isChecked})}} />
        <Text style={styles.lembrarsenhaText}>Lembrar senha</Text>
      

      
        <TouchableOpacity style={styles.btnRecuperarSenha} onPress={() => {this.props.navigation.navigate('RecoverPassword')}}>
        <Text style={styles.recuperaSenhaText}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>



      <TouchableOpacity style={styles.btnsubmit} onPress={() =>{this.props.navigation.navigate('Home')}}>
        <Text style={styles.submitText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnregister} onPress={() => {this.props.navigation.navigate('Register')}}>
        <Text style={styles.registerText}>Registrar-se</Text>
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
      paddingTop: 70,
},
  container:{
      
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
  btnregister:{
     marginTop:10,

},
  registerText:{
     color: '#fff',
     fontSize: 17,

},
  btnRecuperarSenha:{
    
},
recuperaSenhaText:{
  color: '#fff',
  

},
  checkbox: {
    margin:4,
    
  },
  lembrarsenhaText:{
    color: '#fff' ,
    paddingRight: 70,

  },
  botoesup:{
    flexDirection: 'row',
      alignItems: 'center',
     
  },
  

});
