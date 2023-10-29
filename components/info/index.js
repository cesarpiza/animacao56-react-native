import React, { useState } from 'react';
import {
    Dimensions,
    Text,
    View
} from 'react-native';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

export default function Info(props) {

    const {
        title,
        location,
        date,
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.location}>
                        {location}
                    </Text>
                </View>
                <Text style={styles.date}>
                    {date}
                </Text>
            </View>
        </View>
    );
}