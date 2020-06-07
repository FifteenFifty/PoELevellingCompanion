import { StyleSheet } from "react-native";

// light
// dark
// amoled
export var Theme = localStorage.getItem("theme") || "light";

export function setAndStoreTheme(value) {
  localStorage.setItem("theme", value);
}

export const Colours = {
  light: {
    colors: {
      primary: "#000",
      background: "#f2f2f2",
      border: "#000",
      card: '#fff',
    },
    navHeader: {
      headerStyle: {
        backgroundColor: '#999',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
    backgroundedLabelText: "#101010",
    borderColour: "#4d4d4d",
    requiredLabel: "aaade87",

    bossColour:  "#d2691e",
    areaColour:  "blue",
    questColour: "green",
    wpColour:    "#84a9e1",
    trialColour: "teal",
  },
  dark: {
    colors: {
      primary: "#eee",
      background: "#121212",
      card: '#121212',
      border: '#eee',
      text: "#eee"
    },
    navHeader: {
      headerStyle: {
        backgroundColor: '#3700B3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
    backgroundedLabelText: "#101010",
    borderColour: "#4d4d4d",
    requiredLabel: "#aaade87",

    bossColour:  "#ffa500",
    areaColour:  "#9999ff",
    questColour: "#66ff66",
    wpColour:    "#84a9e1",
    trialColour: "teal",
  },
  amoled: {
    colors: {
      primary: "#eee",
      background: "#000",
      card: '#000',
      border: '#eee',
      text: "#eee"
    },
    navHeader: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
    backgroundedLabelText: "#101010",
    borderColour: "#4d4d4d",
    requiredLabel: "#aaade87",

    bossColour:  "#ffa500",
    areaColour:  "#9999ff",
    questColour: "#66ff66",
    wpColour:    "#84a9e1",
    trialColour: "teal",
  }
}

export const globalStyles = StyleSheet.create({
  genericPage: {
    minHeight: 50,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: "center",
  },
  borderlessContainer: {
    flexDirection: "row",
    paddingTop: 2,
    paddingBottom: 20,
  },
  container: {
    flexDirection: "row",
    minHeight: 50,
    paddingTop: 2,
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderColor: Colours[Theme].borderColour
  },
  stackedContainer: {
    minHeight: 50,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 40,
    borderBottomWidth: 2,
    borderColor: Colours[Theme].borderColour
  },
  label: {
    display: "flex",
    alignItems: "center",
    width: 30,
    justifyContent: "center",
  },
  labelContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  labelContainerLeft: {
    marginLeft: 2,
  },
  labelContainerRight: {
    marginRight: 2,
  },
  labelText: {
    fontSize:  20,
    textAlign: "center",
    color:     Colours[Theme].colors.primary,
  },
  backgroundedLabelText: {
    fontSize:  20,
    textAlign: "center",
    color:     Colours[Theme].backgroundedLabelText,
  },
  waypointActiveContainer: {
    backgroundColor: Colours[Theme].wpColour
  },
  waypointInactiveContainer: {
  },
  requiredContainer: {
    backgroundColor: Colours[Theme].requiredLabel
  },
  optionalContainer: {
    flexDirection: "row"
  },
  optionalLabelContainer: {
  },
  waypointLabelActive: {
    backgroundColor: Colours[Theme].wpColour
  },
  waypointLabelInactive: {},
  centerBlock: {
    flex: 1,
    width: "80%"
  },
  requiredContainer:{
    backgroundColor: "#aade87"
  },
  header: {
    width:  "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize:   18,
    color:      Colours[Theme].colors.primary,
    fontWeight: "bold"
  },
  section: {
    padding: 10,
    width:  "100%",
    flexDirection: "row",
    justifyContent: "center"
  },
  sectionText: {
    fontSize:   18,
    color:      Colours[Theme].colors.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: Colours[Theme].colors.primary,
  },
  headerMenuIcon: {
    fontSize: 28,
    color:    Colours[Theme].colors.primary,
    position: "absolute",
    left:     0
  },
  info: {
    flexDirection: "row"
  },
  infoItem: {
    padding: 5,
    color:   Colours[Theme].colors.primary,
  },
  complete: {
    opacity: .2
  },
  required: {
    fontWeight: "bold"
  },
  boss: {
    color: Colours[Theme].bossColour
  },
  area: {
    color: Colours[Theme].areaColour
  },
  quest: {
    color: Colours[Theme].questColour
  },
  waypoint: {
    color: Colours[Theme].wpColour
  },
  trial: {
    color: Colours[Theme].trialColour
  }
});
