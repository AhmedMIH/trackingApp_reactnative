import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignInScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.view}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
        onDidBlur={clearErrorMessage}
      />
      <ScrollView>
        <AuthForm
          headerText="Sign in"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign In"
        />
        <NavLink
          text="you did not have a account ? sign up"
          routeName="Signup"
        />
      </ScrollView>
    </View>
  );
};

SignInScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 0,
    marginTop:80
  },
});

export default SignInScreen;
