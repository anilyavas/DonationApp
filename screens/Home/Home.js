import React from 'react';
import style from './style';
import {View, SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';

const Home = () => {
  return (
    <SafeAreaView style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <View>
        <Header title={'Azzahri A.'} type={1} />
        <Tab title={'Highlight'} />
        <Tab title={'Highlight'} isInactive={true} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
