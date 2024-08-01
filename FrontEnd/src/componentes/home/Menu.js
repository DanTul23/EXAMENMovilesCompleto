import React from "react";
import { View,StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";

const Menu=()=>{
    return (
        <View style={styles.container}>
            <ProfileCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo el espacio disponible
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        backgroundColor: '#f5f5f5', // Opcional: color de fondo para mejor visibilidad
    },
});

export default Menu