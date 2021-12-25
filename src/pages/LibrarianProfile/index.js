import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Profile, ProfileItem, Button, Gap} from '../../component';
import {colors} from '../../utils';

const LibrarianProfile = ({navigation, route}) => {
  const dataLibrarian = route.params;
  return (
    <View style={styles.page}>
      <Header title="Librarian Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={dataLibrarian.data.fullName}
        desc={dataLibrarian.data.profession}
        photo={{uri: dataLibrarian.data.photo}}
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value={dataLibrarian.data.university} />
      <ProfileItem
        label="Tempat Perpustakaan"
        value={dataLibrarian.data.library_address}
      />
      <ProfileItem label="No. STR" value={dataLibrarian.data.str_number} />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', dataLibrarian)}
        />
      </View>
    </View>
  );
};

export default LibrarianProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
