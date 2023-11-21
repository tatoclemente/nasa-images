import { Linking, StyleSheet } from 'react-native';
import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PostImage = ({ title, date, url, explanation}) => {

    const { navigate } = useNavigation();

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation})
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.buttonContainer}>
            <Button title="View" onPress={handleViewPress} />
        </View>
    </View>
  )   
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(15, 39, 113, 255)",
        borderRadius: 15,
        marginBottom: 12,
        padding: 16
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12
    },
    date: {
        color: "#fff",
    },
    buttonContainer: {
        alignItems: "flex-end",
    }
})
export default PostImage