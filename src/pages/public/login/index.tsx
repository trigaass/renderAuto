import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import { View, StyleSheet, Image, Text, TextInput, Pressable, Button } from "react-native"

export const Login = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

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
                    <Text style={styles.label}>email</Text>
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
                    <Button
                        title={"Entrar"}
                        onPress={() => { }}
                        disabled={false}
                    />
                    <Pressable onPress={() => navigation.navigate('forgot')}>
                        <Text>Esqueceu a senha?</Text>
                    </Pressable>
                </View>
            </Animatable.View>
            <Pressable onPress={() => navigation.navigate('register')}>
                <Text>Não tem uma conta? Cadastre-se aqui!</Text>
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

  link: {
    color: "#868282",
    textAlign: "center",
    marginTop: 10,
  },
});
