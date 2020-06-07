import React from 'react';
import { Linking, Text, View, Image} from 'react-native';

import { globalStyles } from "../styles/global.js";
import { images } from "../assets/images.js";


export default function About() {
  return (
    <View style={globalStyles.minimalContainer}>
      <Text style={globalStyles.headerText}>How to read tasks</Text>
      <View style={globalStyles.imageContainer}>
        <Image source={images.usage}
               style={{flex: 1, resizeMode: "contain", height:251,}}/>
      </View>
      <Text style={[globalStyles.headerText, globalStyles.textLink]}
            onPress={() => Linking.openURL("https://github.com/FifteenFifty/PoELevellingCompanion")}>
        Github (PRs welcome!)
      </Text>
      <View style={globalStyles.bottomContainer}>
        <Text style={globalStyles.textLink}
              onPress={() => Linking.openURL("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=DGRKE2P4M8XFS&currency_code=GBP&source=url")}>
          Donate
        </Text>
      </View>
    </View>
  );
}
