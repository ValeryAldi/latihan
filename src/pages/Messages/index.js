import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../component';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Fire.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messageDB = rootDB.child(urlHistory);

    messageDB.on('value', async snapshot => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlUidLibrarian = `librarians/${oldData[key].uidPartner}`;
          const detailLibrarian = await rootDB
            .child(urlUidLibrarian)
            .once('value');
          console.log('detail librarians: ', detailLibrarian.val());
          data.push({
            id: key,
            detailLibrarian: detailLibrarian.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);

        console.log('new data history: ', data);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map(chat => {
          const dataLibrarian = {
            id: chat.detailLibrarian.uid,
            data: chat.detailLibrarian,
          };
          return (
            <List
              key={chat.id}
              profile={{uri: chat.detailLibrarian.photo}}
              name={chat.detailLibrarian.fullName}
              desc={chat.lastContentChat}
              onPress={() => navigation.navigate('Chatting', dataLibrarian)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
