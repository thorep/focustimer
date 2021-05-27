import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Platform } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/colors";
import { spacing, fontSize } from "../../utils/sizes";
import { Countdown } from "../../components/Countdown";
import { Progress } from "../../components/ProgressBar";
import { Timing } from "../../features/timer/Timing";
const DEFAULT_TIME = 1;
export const Timer = ({ focusSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);

  const onProgress = (progress) => {
    setProgress(progress);
  };
  const vibrate = (timeoutMilliseconds) => {
    if (Platform.OS === "ios") {
      Vibration.vibrate();
      const interval = setInterval(() => {
        Vibration.vibrate();
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
      }, timeoutMilliseconds);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onEnd = () => {
    vibrate(10000);
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={onProgress} minutes={minutes} onEnd={onEnd} />
        <Progress progress={progress} />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: fontSize.lg,
    color: colors.white,
    textAlign: "center",
  },
  task: {
    fontSize: fontSize.xl,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
