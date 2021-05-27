import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSize, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          key={"test"}
          style={{ flex: 1, marginRight: spacing.md }}
          onChange={({ nativeEvent }) => {
            setTmpItem(nativeEvent.text);
          }}
        />
        <RoundedButton
          title="+"
          size={50}
          style={{ borderWidth: 2 }}
          onPress={(_) => {
            addSubject(tmpItem);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: "row",
  // },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSize.lg,
  },
  inputContainer: {
    flexDirection: "row",
    paddingTop: spacing.md,
    alignItems: "center",
  },
});
