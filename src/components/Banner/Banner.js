import React from 'react'
import {ScrollView, Image} from "react-native"
import styles from "./Banner.styles"

const Banner = ({news_banner_data}) => {
    return(
        <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
        {
          news_banner_data.map(bannerNews => <Image key={bannerNews.id} style={styles.image} source={{uri: bannerNews.imageUrl}}/>)
        }
      </ScrollView>
    )
}

export default Banner;