import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function VerticalLabel({text, down, containerStyle}) {
    return (
        <View style={[styles.container,
                      containerStyle,
                      down ? styles.containerDown : styles.containerUp]}>
            <Text style={[styles.text, down ? styles.textDown : styles.textUp]}>{text}</Text>
        </View>
    );
}

function HalfHeightLabel({text, lhs, containerStyle}) {
    return (
        <View style={[styles.hhContainer,
                      containerStyle,
                      lhs ? styles.containerDown : styles.containerUp]}>
            <Text style={[styles.hhText]}>{text}</Text>
        </View>
    );
}

function WaypointLabel({active}) {
    return (
        <VerticalLabel text={ active ? "WP" : "" }
                       down={false}
                       containerStyle={active ? styles.waypointActiveContainer
                                              : styles.waypointInactiveContainer} />
    );
}

function RequiredLabel() {
    return (
        <VerticalLabel text="Req"
                       down={true}
                       containerStyle={styles.requiredContainer} />
    );
}

function OptionalLabel({secondaryText}) {
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

export function LeftLabel ({item}) {
//  return (<WaypointLabel active={item.hasWp} />);

  return (<View>
            <HalfHeightLabel text={item.minLvl}
                             lhs={true} />
            <HalfHeightLabel text={item.hasWp ? "WP" : ""}
                             lhs={true}
                             containerStyle={item.hasWp
                                             ? styles.waypointActiveContainer
                                             : styles.waypointInactiveContainer} />
          </View>);
}

export function RightLabel({item}) {
//  return (item.optional
//          ? <OptionalLabel secondaryText={"?"} />
//          : <RequiredLabel />);
  return (<View>
            <HalfHeightLabel text={item.optional ? "Opt" : "Req"}
                             lhs={false}
                             containerStyle={item.optional
                                             ? styles.optionalLabelContainer
                                             : styles.requiredContainer} />
            <HalfHeightLabel text={item.directionArrow
                                   ? item.directionArrow
                                   : ""}
                             lhs={false} />
          </View>);
}

const textOffset = 6;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        width: 30,
        justifyContent: "center",
    },
    hhContainer: {
        alignItems: "center",
        width: 40,
        height: "50%",
        justifyContent: "center",
        alignItems: "center"
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
    hhText: {
        fontSize: 20,
        textAlign: "center",
        color: "black",
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
    },
})
