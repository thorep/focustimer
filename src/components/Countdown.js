import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RoundedButton } from "./RoundedButton";
import { fontSize, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const minutesToMilliseconds = (minutes) => {
  return minutes * 1000 * 60;
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

export const Countdown = ({ minutes, isPaused, onProgress, onEnd }) => {
  const [milliseconds, setMilliseconds] = useState(null);

  const interval = React.useRef(null);

  //runs everytime new minutes comes in to the component
  useEffect(() => {
    setMilliseconds(minutesToMilliseconds(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    onProgress(milliseconds / minutesToMilliseconds(minutes));
    if (milliseconds === 0) onEnd();
    return () => clearInterval(interval.current);
  }, [isPaused, milliseconds]);

  const countDown = () => {
    setMilliseconds((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  const minute = Math.floor(milliseconds / 1000 / 60) % 60;
  const seconds = Math.floor(milliseconds / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    // backgroundColor: "rgba(94,134,226,0.3)",
  },
});
