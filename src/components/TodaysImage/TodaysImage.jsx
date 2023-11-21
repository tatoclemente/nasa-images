import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TodaysImage = ({ date, title, url, explanation }) => {

    const { navigate } = useNavigation();

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation})
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: url }} style={styles.image} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
              <Button title="View" onPress={handleViewPress}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C449D',
        marginVertical: 16,
        borderRadius: 16,
        padding: 16,
    },
    imageContainer: {
        // borderWidth: 2,
        // borderRadius: 15
    },
    image: {
        width: '100%',
        borderRadius: 15,
        height: 200,
        borderWidth: 2,
        borderColor: '#fff'
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#fff',
        fontSize: 16
    },
    buttonContainer: {
        alignItems: 'flex-end'
    }
})

export default TodaysImage;