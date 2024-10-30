import React from 'react';
import Logo from  '../../../assets/logo.png'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from '../login/style'; // Fixed import statement

const Login = () => {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image style={style.imageLogo} source={Logo} resizeMode='contain' />
      </View>
      <View style={style.title}>
        <Text style={style.titleTextLeft}>LOGIN</Text>
        <Text style={style.titleTextRight}>Create new account</Text>
      </View>
      <View style={style.boxBottom}>
        <TextInput
          placeholder='Email'
          style={style.input}
          placeholderTextColor={'#000000'}
          keyboardType='email-address'
        />
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          style={style.input}
          placeholderTextColor={'#000000'}
        />
        <Button style={style.login}
          title= 'Login'
          onPress={() => {}}

        >
        </Button>
      </View>
    </View>
  );
};

export default Login;
