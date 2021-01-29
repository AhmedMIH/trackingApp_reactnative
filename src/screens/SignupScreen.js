import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.view}>
      <ScrollView>
        <NavigationEvents
          onWillBlur={clearErrorMessage}
          onWillFocus={clearErrorMessage}
        />
        <AuthForm
          headerText="Sign up"
          errorMessage={state.errorMessage}
          onSubmit={signup}
          submitButtonText="Sign Up"
        />
        <NavLink
          text="you already have a account ? sign in"
          routeName="Signin"
        />
      </ScrollView>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 0,
    marginTop: 80,
  },
});

export default SignupScreen;
