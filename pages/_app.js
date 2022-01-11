import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { GlobalStyles } from "../components/themes";
import { AppWrapper } from "../components/ThemeContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <AppWrapper>
          <GlobalStyles />
          <Component {...pageProps}></Component>
        </AppWrapper>
      </Provider>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
