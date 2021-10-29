import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
  {
    title: "NIKE",
    data: ["JORDAN", "AIR MAX", "AIR FORCE"]
  },
  {
    title: "ADIDAS",
    data: ["YEEZY", "YEEZY BOOST", "SLIDES"]
  },
  {
    title: "VANS",
    data: ["OLD SKOOL", "CHUKKA", "AUTHENTICS","SLIP-ON","ERA"]
  },
  {
    title: "CONVERSE",
    data: ["ALL-STAR", "PLAY","CHUCK TALOR"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>

  </View>
);

const Shop = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#d4d4d4",
    padding: 20,
    marginVertical: 8,
    borderRadius: 20,
  },
  header: {
    fontSize: 30,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  title: {
    fontSize: 20
  }
});

export default Shop;