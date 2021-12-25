import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Header} from '../../component';
import {colors, fonts} from '../../utils';

const DetailNews = ({navigation, route}) => {
  const news = route.params;

  return (
    <View style={styles.page}>
      <Header
        title={news.title}
        desc={news.date}
        onPress={() => navigation.goBack()}
      />
      <ImageBackground source={{uri: news.image}} style={styles.bg} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>{news.body}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailNews;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bg: {
    height: 260,
  },
  content: {
    padding: 8,
    backgroundColor: colors.white,
    flex: 1,

    marginTop: -40,
  },
  text: {
    fontSize: 14,
    paddingHorizontal: 16,
    fontFamily: fonts.primary[400],
    color: colors.black,
    textAlign: 'justify',
    lineHeight: 30,
  },
});
