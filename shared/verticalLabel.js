import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function VerticalLabel({text, down, containerStyle}) {
    return (
        <View style={[styles.container,
                      containerStyle,
                      down ? styles.containerDown : styles.containerUp]}>
            <Text style={[styles.text, down ? styles.textDown : styles.textUp]}>{text}</Text>
        </View>
    );
}

export function WaypointLabel({active}) {
    return (
        <VerticalLabel text={ active ? "WP" : "" }
                       down={false}
                       containerStyle={active ? styles.waypointActiveContainer
                                              : styles.waypointInactiveContainer} />
    );
}

export function RequiredLabel() {
    return (
        <VerticalLabel text="Req"
                       down={true}
                       containerStyle={styles.requiredContainer} />
    );
}

export function OptionalLabel({secondaryText}) {
    return (
        <View style={styles.optionalContainer}>
            <VerticalLabel text={secondaryText}
                           down={true}
                           containerStyle={styles.optionalLabelContainer} />
            <VerticalLabel text="Opt"
                           down={true}
                           containerStyle={styles.optionalLabelContainer} />
        </View>
    );
}

const textOffset = 6;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        width: 30,
        justifyContent: "center",
    },
    containerDown: {
        marginLeft: 2,
    },
    containerUp: {
        marginRight: 2,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
    },
    textDown: {
        marginLeft: textOffset,
        transform: [
            {rotate: "90deg"}
        ]
    },
    textUp: {
        marginRight: textOffset,
        transform: [
            {rotate: "-90deg"}
        ]
    },
    waypointActiveContainer: {
        backgroundColor: "#84a9e1"
    },
    waypointInactiveContainer: {
    },
    requiredContainer: {
        backgroundColor: "#aade87"
    },
    optionalContainer: {
        flexDirection: "row"
    },
    optionalLabelContainer: {
        backgroundColor: "#4d4d4d"
    },
})
