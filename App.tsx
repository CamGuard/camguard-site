import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { IoIosArrowBack, IoIosArrowForward, IoIosHome } from "react-icons/io";
import { RiCameraLensFill } from "react-icons/ri";
import { useRef } from "react";
import { Video, ResizeMode } from "expo-av";

export default function App() {
    const { width, height } = Dimensions.get("window");
    const videoRef = useRef(null);
    const streamURL = "http://localhost:3000/mjpg";

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={[styles.header, { width: width }]}>
                <RiCameraLensFill style={styles.bigLogo} />
                <Text style={styles.logo}>CamGuard</Text>
            </View>
            <View style={styles.camera}>
                <Video
                    ref={videoRef}
                    source={{ uri: streamURL }}
                    style={styles.video}
                    resizeMode={ResizeMode.CONTAIN}
                    useNativeControls={false}
                />
            </View>
            <View style={[styles.footer, { width: width }]}>
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
        width: "100%",
        height: "100%",
        alignSelf: "center"
    },
});
