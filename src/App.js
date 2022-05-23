import React from 'react'
import { SafeAreaView, FlatList, Text, } from 'react-native'
import styles from "./App.styles"
import NewsCard from './components/NewsCard'
import news_data from "./news_data.json"
import news_banner_data from "./news_banner_data.json"
import Banner from "./components/Banner"

const App = () => {

  const renderItem = ({ item }) => <NewsCard news={item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>News</Text>
      {/* <FlatList data={news_data} renderItem={(data) => <Text>{data.item.author}</Text> }/> */}

      <FlatList ListHeaderComponent={<Banner news_banner_data={news_banner_data}/>} data={news_data} renderItem={renderItem} />
    </SafeAreaView>
  )
}

export default App;