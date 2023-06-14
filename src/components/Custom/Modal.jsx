import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNModal from "react-native-modal";
import theme from "../../theme";
import StyledText from "./StyledText";

export const Modal = ({ isVisible = false, children, ...props }) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}
    >
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }) => (
  <View style={styles.header}>
    <StyledText title={true} style={styles.text}>
      {title}
    </StyledText>
  </View>
);

const ModalBody = ({ children }) => <View style={styles.body}>{children}</View>;

const ModalFooter = ({ children }) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.item,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.mainButton,
    borderStyle: "solid",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: 10,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    minHeight: 100,
    textAlign: "center",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
  },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
