import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import { Button, Text, TextInput, View, StyleSheet, Image, Pressable, Alert } from "react-native"
import { Checkbox } from "react-native-paper";
import axios from "axios";

export const Register = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://192.168.1.19:8080/users", {
        email,
        password,
      });
      Alert.alert("Conta criada com sucesso!");
      navigation.navigate('login');
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível criar a conta. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo/Logoeschor.png")}
        />
      </View>
      <Animatable.View
        animation="fadeInRight"
        duration={500}
        style={styles.formWrapper}
      >
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.checkContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />
            <Text>Li e concordo com os termos de serviço</Text>
          </View>
          <Button
            title={"Criar Conta"}
            onPress={handleRegister}
            disabled={false}
          />
        </View>
      </Animatable.View>
      <Pressable onPress={() => navigation.navigate('login')}>
        <Text>Ou volte ao login aqui!</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 40,
  },

  logo: {
    alignItems: "center",
  },

  image: {
    width: "80%",
    height: undefined,
    aspectRatio: 1.6,
    resizeMode: "contain",
  },

  formWrapper: {
    width: "80%",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 20,
  },

  form: {
    gap: 10,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },

  input: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },

  button: {
    backgroundColor: "#6DB52F",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  link: {
    color: "#868282",
    textAlign: "center",
    marginTop: 10,
  },
});
