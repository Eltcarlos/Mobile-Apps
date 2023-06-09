import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MenuItem } from "../interfaces/appIntefaces";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../context/theme/ThemeContext";

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(menuItem.components as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={23} />
        <Text style={{ ...styles.itemText }}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" color={colors.primary} size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
