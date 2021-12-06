import React , {Component} from 'react';
import {View, KeyboardAvoidingView , StyleSheet, TextInput , TouchableOpacity, Text} from 'react-native';


export default class Register extends Component{

  constructor(props) {
    super(props)
    this.state = {
      username: null,
      email: null,
      senha: null,
      confirmSenha: null,
    }
    this.verifyAccount = this.verifyAccount.bind(this);
    this.newAccount = this.newAccount.bind(this);
  }

  verifyAccount() {
    if (!this.state.email || !this.state.senha || !this.state.confirmSenha) {
      alert('Todos os campos devem ser preenchidos!')
      return
    }

    if (this.state.senha !== this.state.confirmSenha) {
      alert(
        "Erro \n"+
        "As senhas são diferentes!",
        [
          {text: "OK", onPress: () => {
            this.senhaRef.clear();
            this.confirmSenhaRef.clear();
            this.senhaRef.focus();
          }}
        ]
      )
    } else {
      this.newAccount()
    }
  }

  newAccount() {
    console.log("Cria a conta")
              this.props.navigation.navigate('Emailconfirmation')
  }


  render() {
    return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.background}>
          <Text style={styles.header}>EasyJobGO</Text>
      </View>

      

      <View style={styles.container}>

      <TextInput style={styles.input}
      placeholder="Nome Usuario"
      value={this.state.username}
      autoCorrect={false}
      onChangeText={(username)=>{this.setState({username : username})}}
      /> 

      <TextInput style={styles.input}
      placeholder="Email"
      value={this.state.email}
      autoCorrect={false}
      onChangeText={(email)=>{this.setState({email : email})}}
      />

      <TextInput style={styles.input}
      placeholder="Senha"
      value={this.state.senha}
      ref={input => {this.senhaRef = input}}
      autoCorrect={false}
      onChangeText={(senha)=>{this.setState({senha: senha})}}
      secureTextEntry={true}
      /> 
      <TextInput style={styles.input}
      placeholder="Confirmação de Senha"
      value={this.state.confirmSenha}
      ref={input => {this.confirmSenhaRef = input}}
      autoCorrect={false}
      onChangeText={(confirmSenha)=>{this.setState({confirmSenha : confirmSenha})}}
      secureTextEntry={true}
      />  

      <TouchableOpacity style={styles.btncreateaccount} onPress={() => this.verifyAccount()}>
        <Text style={styles.createText}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnlogin} onPress={()=> this.props.navigation.navigate('Login')}>
        <Text style={styles.loginText}>Já possui uma conta ? Entrar</Text>
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
header:{
  flex: 1,
  color: '#fff',
  paddingTop: 125,
  fontSize: 60
}, 
container:{
  flex: 1,
  alignItems:'center',
  justifyContent:'center',
  width: '90%',
  paddingVertical: 100
  
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
btncreateaccount:{
  backgroundColor:'#35AAFF',
  width: '90%',
  height: 45,
  alignItems: 'center',
  justifyContent:'center',
  borderRadius: 7,
  
},
createText:{
  color:'#fff',
  fontSize:18
},
btnlogin:{
  marginTop:10,

},
loginText:{
  color: '#fff',
  fontSize: 17,

},

});
