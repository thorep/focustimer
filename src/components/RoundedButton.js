import React from "react";
import { TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { fontSize, paddingSizes } from "../utils/sizes";
import { Ionicons } from "@expo/vector-icons";

export const RoundedButton = ({ style = {}, textStyle = {}, size = 125, ...props }) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      {props.title === "Pause" ? (
        <Ionicons name="pause" size={size / 2} color="white" />
      ) : (
        <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 3,
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#fff",
      borderWidth: 2,
    },
    text: {
      color: "#fff",
      fontSize: size / 3,
    },
  });
