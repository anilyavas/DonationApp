import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Input from '../../components/Input/Input';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Login = () => {
  const [email, setEmail] = useState();
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Input
          keyboardType={'email-address'}
          label={'Email'}
          placeholder={'Enter your email...'}
          onChangeText={value => setEmail(value)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
