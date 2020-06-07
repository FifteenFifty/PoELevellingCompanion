import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from "../styles/global.js";

function HalfHeightLabel({text, lhs, containerStyle, textStyle}) {
  return (
    <View style={[globalStyles.labelContainer,
                  containerStyle,
                  lhs
                  ? globalStyles.labelContainerLeft
                  : globalStyles.labelContainerRight]}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
}

export function LeftLabel ({item}) {

  return (<View>
      <HalfHeightLabel text={item.minLvl}
                       lhs={true}
                       textStyle={globalStyles.labelText} />
      <HalfHeightLabel text={item.hasWp ? "WP" : ""}
               lhs={true}
               containerStyle={item.hasWp
                       ? globalStyles.waypointActiveContainer
                       : globalStyles.waypointInactiveContainer}
               textStyle={globalStyles.backgroundedLabelText}/>
      </View>);
}

export function RightLabel({item}) {
  return (<View>
      <HalfHeightLabel text={item.optional ? "Opt" : "Req"}
               lhs={false}
               containerStyle={item.optional
                       ? globalStyles.optionalLabelContainer
                       : globalStyles.requiredContainer}
               textStyle={item.optional
                          ? globalStyles.labelText
                          : globalStyles.backgroundedLabelText }/>
      <HalfHeightLabel text={item.directionArrow
                   ? item.directionArrow
                   : ""}
               lhs={false}
               textStyle={globalStyles.labelText}/>
      </View>);
}
