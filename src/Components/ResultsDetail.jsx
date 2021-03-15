import React from 'react';
import {View, Image, Text, StyleSheet} from "react-native";

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.viewStyle}>
            <Image
                style={styles.image}
                source={{ uri: result.image_url }}
            />
            <Text style={styles.textStyle}>{result.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    viewStyle: {},
    textStyle: {}
});

export default ResultsDetail;