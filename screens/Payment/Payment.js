import React from 'react';
import style from './style';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {useSelector} from 'react-redux';

const Payment = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <View>
          <Header title={'Making Donation'} />
          <Text style={style.donationAmountDescription}>
            You are about to donate {donationItemInformation.price}
          </Text>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
