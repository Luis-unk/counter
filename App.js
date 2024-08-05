import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handlerSum = () => setCount(count + 1);
  const clearSum = () => (setCount(0), Alert.alert("Tudo Limpo!"));
  const handlerSub = () => setCount(count - 1);
  const handlerText = (text) => setText(text);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.textStyle}>O valor do contador é: {count}</Text>
      <View style={styles.buttonList}>
        <Button title="Somar" onPress={handlerSum} color={"green"}></Button>
        <Button
          title="Subtrair"
          onPress={handlerSub}
          color={"#fbf451"}
        ></Button>
        <Button title="Limpar" onPress={clearSum} color={"red"}></Button>
      </View>
      <TextInput
        placeholder="Digite aqui"
        style={styles.inputText}
        onChangeText={handlerText}
      ></TextInput>
      <Text style={styles.textStyle}>O texto digitado é: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 50,
    margin: 10,
    alignItems: "center",
  },

  textStyle: {
    marginTop: 10,
    fontSize: 20,
  },

  inputText: {
    height: 40,
    borderColor: "gray",
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 30,
    padding: 10,
    width: "80%",
  },

  buttonList: {
    width: 300,
    display: "flex",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonDesign: {
    borderRadius: 6,
    fontSize: 10,
    height: 40,
  },
});
