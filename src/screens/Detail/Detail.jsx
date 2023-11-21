import { useRoute } from "@react-navigation/native";
import react from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../../components/Header";
const Detail = () => {
    const { params: { title, url, explanation, date } } = useRoute()
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Image source={{ uri: url }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        backgroundColor: 'rgba(7, 26, 93, 255)'
    },
    content: {
        flex: 1,
        backgroundColor: '#2C449D',
        borderRadius: 20,
        marginVertical: 24,
        padding: 16
    },
    image: {
        width: '100%',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 15,
        height: '50%',
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    date: {
        color: '#fff',
    },
    explanationContainer: {
        marginVertical: 16
    },
    explanation: {
        color: '#fff',
    }
})

export default Detail