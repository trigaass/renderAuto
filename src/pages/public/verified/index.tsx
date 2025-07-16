import { Button, Image, Text, View, StyleSheet } from "react-native";

export const Verified = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    style={styles.image}
                    source={require("../../../assets/logo/Logoeschor.png")}
                />
            </View>

            <View style={styles.verify}>
                <Text style={styles.label}>Conta verificada!</Text>
                <Button
                    title="Ir para login"
                    onPress={() => { }}
                    disabled={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },

    logo: {
    },

    image: {
    },

    verify: {
    },

    label: {
    },
});