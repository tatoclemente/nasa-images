import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { format, sub } from 'date-fns'

import Header from '../../components/Header'
import fetchApi from '../../utils/fetch'
import TodaysImage from '../../components/TodaysImage/TodaysImage'
import LastFiveDaysImages from '../../components/LastFiveDaysImages'


const Home = () => {
  const [todayImage, setTodayImage] = useState({})
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState([])

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todayImageResponse = await fetchApi() 
        setTodayImage(todayImageResponse)
      } catch (error) {
        console.error(error);
      }
    }

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date()
        const todaysDate = format(date, 'yyyy-MM-dd')
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd') 

        const lastFiveDaysImageResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)
        setLastFiveDaysImages(lastFiveDaysImageResponse);
      } catch (error) {
        console.error(error);
      }
    }

    loadTodaysImage().catch(null)
    loadLast5DaysImages()
  
  }, [])

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todayImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7, 26, 93, 255)"
  }
})
export default Home