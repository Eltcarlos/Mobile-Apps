import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/appTheme";
import { HeaderTitle } from "../components/HeaderTitle";
import { ThemeContext } from "../context/theme/ThemeContext";

export const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: "#5856D6",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: "#5856D6",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 22 }}>Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
