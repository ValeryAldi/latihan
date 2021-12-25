import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {Header, List} from '../../component';
import {Fire} from '../../config';
import {colors} from '../../utils';

const ChooseLibrarian = ({navigation, route}) => {
  const [listLibrarian, setListLibrarian] = useState([]);
  const itemCategory = route.params;
  useEffect(() => {
    callLibrarianByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callLibrarianByCategory = category => {
    Fire.database()
      .ref('librarians/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        console.log('data list librarian: ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          console.log('data list librarian: ', data);
          setListLibrarian(data);
        }
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {listLibrarian.map(librarian => {
        return (
          <List
            key={librarian.id}
            type="next"
            profile={{uri: librarian.data.photo}}
            name={librarian.data.fullName}
            desc={librarian.data.gender}
            onPress={() => navigation.navigate('LibrarianProfile', librarian)}
          />
        );
      })}
    </View>
  );
};

export default ChooseLibrarian;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
