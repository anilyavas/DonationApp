import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';
import Header from '../../components/Header/Header';

import BackButton from '../../components/BackButton/BackButton';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Badge from '../../components/Badge/Badge';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const catergoryInformation = route.params.catergoryInformation;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton
          onPress={() => navigation.goBack()}
          style={style.container}
        />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={catergoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.Button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
