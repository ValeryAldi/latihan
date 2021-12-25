import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  LibrarianCategory,
  RatedLibrarian,
  NewsItem,
  Gap,
} from '../../component';
import {colors, fonts, showError} from '../../utils';
import {Fire} from '../../config';

const Librarian = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryLibrarian, setCategoryLibrarian] = useState([]);
  const [librarians, setLibrarians] = useState([]);
  useEffect(() => {
    getCategoryLibrarian();
    getTopRatedLibrarians();
    getNews();
  }, []);

  const getTopRatedLibrarians = () => {
    Fire.database()
      .ref('librarians/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setLibrarians(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getCategoryLibrarian = () => {
    Fire.database()
      .ref('category_librarian/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setCategoryLibrarian(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getNews = () => {
    Fire.database()
      .ref('News/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setNews(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryLibrarian.map(item => {
                  return (
                    <LibrarianCategory
                      key={`category-${item.id}`}
                      category={item.category}
                      onPress={() =>
                        navigation.navigate('ChooseLibrarian', item)
                      }
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated</Text>
            {librarians.map(librarian => {
              return (
                <RatedLibrarian
                  key={librarian.id}
                  name={librarian.data.fullName}
                  desc={librarian.data.profession}
                  avatar={{uri: librarian.data.photo}}
                  onPress={() =>
                    navigation.navigate('LibrarianProfile', librarian)
                  }
                />
              );
            })}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
                content={item.body}
                onPress={() => navigation.navigate('DetailNews', item)}
              />
            );
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Librarian;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
