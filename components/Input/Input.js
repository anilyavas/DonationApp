import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Input = props => {
  const [value, setValue] = useState();
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        style={style.input}
        value={value}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(value);
        }}
      />
    </View>
  );
};
Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
