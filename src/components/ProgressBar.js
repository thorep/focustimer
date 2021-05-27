import React from "react";
import { ProgressBar } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

import { spacing } from "../utils/sizes";

export const Progress = ({ progress }) => {
  return (
    <View
      style={{
        marginLeft: spacing.md,
        marginRight: spacing.md,
        // paddingTop: spacing.sm,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 0.5 }}>
        <ProgressBar
          color="#61dbfb"
          style={{
            height: spacing.sm,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            transform: [{ rotate: "180deg" }],
          }}
          progress={progress}
        />
      </View>
      <View style={{ flex: 0.5 }}>
        <ProgressBar
          color="#61dbfb"
          style={{ height: spacing.sm, borderBottomRightRadius: 10, borderTopRightRadius: 10 }}
          progress={progress}
        />
      </View>
      {/* <Text>{progress}</Text> */}
    </View>
  );
};
