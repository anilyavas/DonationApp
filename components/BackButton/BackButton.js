import React from 'react';
import PropTypes from 'prop-types';
import {Pressable} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import style from './style';

const BackButton = props => {
  return (
    <Pressable
      style={style.container}
      onPress={() => {
        props.onPress;
      }}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
