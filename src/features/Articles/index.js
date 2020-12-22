import React from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { styles } from "./styles";
import { connect } from "react-redux";

function ArticleList(props) {
  const { navigation, articles, detail } = props;

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(detail, { id: item.id })
      }}>
      <ImageBackground source={item.image} style={styles.image}>
        <View style={styles.card}>
          <Text style={styles.text}>
            {item.title}
          </Text>
          <Text style={styles.author}>
            {item.author}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={articles}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  const detail = ownProps.navigation.getParam("detail", "Article");

  return {
    detail: detail,
    articles: state.articlesReducer.articles,
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
