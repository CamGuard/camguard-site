import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
    const { width, height } = Dimensions.get("window");

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={[styles.header, { width: width }]}>
                <Text>Header</Text>
            </View>
            <View style={[styles.footer, { width: width }]}>
                <Text>Open up App.tsx to start working on your app!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#f0f0f0",
        height: 75,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        position: "relative",
        top: 0,
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 75,
    },
});
