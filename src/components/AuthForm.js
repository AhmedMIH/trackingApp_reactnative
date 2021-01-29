import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { MaterialIcons } from "@expo/vector-icons";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text style={styles.text}> {headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        placeholder="example@addres.com"
        leftIcon={<MaterialIcons name="email" size={24} color="black" />}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        placeholder="password"
        leftIcon={<MaterialIcons name="lock" size={24} color="black" />}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
  text: {
    fontSize: 40,
    alignSelf: "center",
  },
});

export default AuthForm;
