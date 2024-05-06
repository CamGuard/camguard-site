import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { IoIosArrowBack, IoIosArrowForward, IoIosHome } from "react-icons/io";
import { RiCameraLensFill } from "react-icons/ri";
import { WebView } from "react-native-webview";

export default function App() {
    const { width, height } = Dimensions.get("window");
    const streamURL = "http://109.109.87.147/mjpg/video.mjpg";

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={[styles.header, { width }]}>
                <RiCameraLensFill style={styles.bigLogo} />
                <Text style={styles.logo}>CamGuard</Text>
            </View>
            <View style={styles.camera}>
                <Image source={{ uri: streamURL }} style={styles.video} />
            </View>
            <View style={[styles.footer, { width }]}>
                <IoIosArrowBack style={styles.icon} />
                <IoIosHome style={styles.icon} />
                <IoIosArrowForward style={styles.icon} />
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
    bigLogo: {
        color: "#007AFF",
        fontSize: 40,
        marginHorizontal: 4,
    },
    logo: {
        fontSize: 25,
        fontWeight: "900",
        marginHorizontal: 8,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#f0f0f0",
        height: 75,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    },
    header: {
        position: "relative",
        top: 0,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 75,
        borderBottomColor: "#D9D9D9",
        borderStyle: "solid",
        borderBottomWidth: 2,
        paddingHorizontal: 15,
    },
    icon: {
        color: "#007AFF",
        fontSize: 40,
    },
    camera: {
        width: "100%",
        height: 400,
        display: "flex",
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "#D9D9D9",
        borderWidth: 1,
    },
    video: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});
