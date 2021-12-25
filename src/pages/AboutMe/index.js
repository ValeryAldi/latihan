import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../utils';
import {Gap, ProfileItem} from '../../component';
import {Valery} from '../../assets';

const AboutMe = () => {
  return (
    <View style={styles.page}>
      <View style={styles.pages}>
        <View style={styles.container}>
          <Text style={styles.text}>About Me</Text>
        </View>
        <ScrollView>
          <View style={styles.conten}>
            <View style={styles.borderProfile}>
              <Image source={Valery} style={styles.avatar} />
            </View>
          </View>
          <Gap height={10} />
          <ProfileItem label="Full Name" value="Tubagus Valery Islachul Ardi" />
          <ProfileItem label="Major" value="Informatics Engineering" />
          <ProfileItem label="College" value="Gunadarma University" />
          <ProfileItem
            label="Information"
            value="Aplikasi ini dibuat oleh Valery pada tanggal 30 Juni 2021"
          />
          <ProfileItem label="Facebook" value="Valery Aldi" />
          <ProfileItem label="Instagram" value="valeryaldi" />
        </ScrollView>
      </View>
    </View>
  );
};

export default AboutMe;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  pages: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  conten: {alignItems: 'center'},
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
