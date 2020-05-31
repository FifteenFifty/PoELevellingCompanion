import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding:         20,
    flex:            1,
    backgroundColor: '#fff',
    alignItems:      'center',
    justifyContent:  'center',
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
    color:      "#333",
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
    color:      "#333",
    fontWeight: "bold",
    textAlign: "center",
  },
  headerMenuIcon: {
    fontSize: 28,
    color:    "#333",
    position: "absolute",
    left:     0
  },
  item: {
    padding:10,
    marginTop: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  },
  info: {
    flexDirection: "row"
  },
  infoItem: {
    padding: 5
  },
  complete: {
    opacity: .2
  },
  required: {
    fontWeight: "bold"
  },
  boss: {
    //TODO
    color: "red"
  },
  area: {
    //TODO
    color: "blue"
  },
  quest: {
    //TODO
    color: "green"
  },
  waypoint: {
    //TODO
    color: "lightblue"
  },
  trial: {
    //TODO
    color: "teal"
  }
});
