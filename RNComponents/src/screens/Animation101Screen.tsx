import React from "react";
import { Animated, Button, StyleSheet, View } from "react-native";
import { useAnimation } from "../hooks/useAnimation";

export const Animation101Screen = () => {
  const { opacity, startMoving, position, fadeIn, fadeOut } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBlox,
          opacity,
          marginBottom: 20,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMoving(-100);
        }}
      />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  purpleBlox: {
    backgroundColor: "#5856D6",
    width: 150,
    height: 150,
  },
});
