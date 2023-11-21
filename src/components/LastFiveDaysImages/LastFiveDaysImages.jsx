import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import PostImage from '../PostImage';
const LastFiveDaysImages = ({ postImages }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days</Text>
            <ScrollView>
                {postImages?.map((postImage, index) => (
                    <PostImage key={index} {...postImage}  />
                ))}
            
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 16,
    }
})

export default LastFiveDaysImages