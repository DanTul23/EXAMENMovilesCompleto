import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const twitter = <Icon name={'twitter'} size={30} color={'black'}/>
const facebook = <Icon name={'facebook'} size={30} color={'black'}/>
const instagram = <Icon name={'instagram'} size={30} color={'black'}/>
const linkedin = <Icon name={'linkedin'} size={30} color={'black'}/>
const tiktok = <Icon name={'sitemap'} size={30} color={'black'}/>
const kwai = <Icon name={'video-camera'} size={30} color={'orange'}/>
const kwaiIcon = <Icon name={'custom-kwai-icon'} size={30} color={'orange'} />;

const ProfileCard = () => {
    const user = {
        avatar: "../../../assets/Video.gif",
        coverPhoto: "https://wallpapercave.com/wp/nsu3cSp.jpg",
        name: "Daniel Tulcán"
    }
    
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/sello_400.png")} style={styles.coverPhoto}/>
            
            <View style={styles.avatarContainer}>
                
                <Image source={require("../../../assets/Video.gif")} style={styles.avatar} />
                
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue',}} onPress={() => {
                    Linking.openURL('https://facebook.com/')
                }}>
                    {facebook}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://twitter.com/')
                }}>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://instagram.com/')
                }}>
                    {instagram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://linkedin.com/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://tiktok.com/')}>
                    {tiktok}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.kwai.com')}>
                    {kwai}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height:'80%',
        alignItems: 'center', //flex y grid
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    coverPhoto: {
        width: '100%',
        height: 310,
        marginTop:40,
        resizeMode: 'cover',
        borderRadius:10,

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -50
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 50,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color:'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '90%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard