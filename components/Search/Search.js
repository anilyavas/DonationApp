import React, {useRef, useState} from 'react';
import style from './style';
import {TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/Scaling';
import PropTypes from 'prop-types';

const Search = props => {
  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const [search, setSearch] = useState('');

  const handleSearch = searchValue => {
    setSearch(searchValue);
    props.onSearch(search);
  };
  return (
    <Pressable style={style.searchInputContainer}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
};
Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
