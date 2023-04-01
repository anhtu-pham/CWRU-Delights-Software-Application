import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native"
import { COLORS, SIZES, FONTS, icons, dummyData, images } from "../../constants"
import { Button, Icon, Input } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { color } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export const CreateNewAccount = ({ navigation }) => {
    const [remember, setRemember] = React.useState(false);
    const [editting1, setEditting1] = React.useState(false);
    const [editting2, setEditting2] = React.useState(false);
    const [editting3, setEditting3] = React.useState(false);
    const [pressed1, setPressed1] = React.useState(false);
    const [pressed2, setPressed2] = React.useState(false);
    const [pressed3, setPressed3] = React.useState(false);

    const styles = StyleSheet.create({
        input: {
            position: "relative",
            left: 0,
            height: 60,
            width: "100%",
            borderRadius: 20,
            marginVertical: 10,
            borderWidth: 1,
            backgroundColor: COLORS.lightGray2,
            borderColor: COLORS.lightGray2,
            padding: 10,
            paddingLeft: 50
        },
        selectedInput: {
            position: "relative",
            left: 0,
            height: 60,
            width: "100%",
            borderRadius: 20,
            marginVertical: 10,
            borderWidth: 1,
            backgroundColor: COLORS.lightGreen2,
            borderColor: COLORS.green,
            padding: 10,
            paddingLeft: 50
        },

        inputProfileIcon: {
            position: "relative",
            left: 40,
            zIndex: 30,
            height: 20,
            width: 20,
            tintColor: COLORS.black
        },

        inputProfileIconSelected: {
            position: "relative",
            left: 40,
            zIndex: 30,
            height: 20,
            width: 20,
            tintColor: COLORS.green
        },

        inputVeiwStyle: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
        },
    });


    return (
        <KeyboardAwareScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', padding: 30, backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: SIZES.radius,
                        backgroundColor: 'transparent',
                        position: "absolute",
                        left: 30,
                        top: 60
                    }}
                >
                    <Image
                        source={icons.arrow_back}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    ></Image>
                </TouchableOpacity>

                <Image
                    source={{ uri: 'https://millennialmoney.com/wp-content/uploads/2021/09/Free-Food-Apps.jpg' }}
                    style={{
                        width: 100,
                        height: 100,
                        marginTop: 49,
                        borderRadius: 900
                    }}
                />


                <Text style={{
                    fontSize: 36,
                    fontWeight: "bold",
                    marginVertical: 30

                }}>Create New Account</Text>

                <View
                    style={styles.inputVeiwStyle}
                >
                    <Image
                        style={editting1 ? styles.inputProfileIconSelected : styles.inputProfileIcon}
                        source={icons.phoneIcon}
                    />

                    <TextInput
                        inputMode="tel"
                        onTouchStart={() => {
                            setEditting1(true)
                            setEditting2(false)
                            setEditting3(false)
                        }}

                        onEndEditing={() => {
                            setEditting1(false)
                        }}

                        id="phoneNumber"
                        style={editting1 ? styles.selectedInput : styles.input}
                        placeholder="+1 000 000 000 "
                    />
                </View>
                <View
                    style={styles.inputVeiwStyle}
                >
                    <Image
                        style={editting2 ? styles.inputProfileIconSelected : styles.inputProfileIcon}
                        source={icons.emailIcon}
                    />


                    <TextInput
                        inputMode="email"
                        onTouchStart={() => {
                            setEditting1(false)
                            setEditting2(true)
                            setEditting3(false)
                        }}

                        onEndEditing={() => {
                            setEditting2(false)
                        }}
                        style={editting2 ? styles.selectedInput : styles.input}
                        id="email"
                        placeholder="Email"
                    />



                </View>
                <View
                    style={styles.inputVeiwStyle}
                >
                    <Image
                        style={editting3 ? styles.inputProfileIconSelected : styles.inputProfileIcon}
                        source={icons.profile}
                    />

                    <TextInput
                        inputMode="text"
                        onTouchStart={() => {
                            setEditting1(false)
                            setEditting2(false)
                            setEditting3(true)
                        }}

                        onEndEditing={() => {
                            setEditting3(false)
                        }}
                        style={editting3 ? styles.selectedInput : styles.input}
                        id="fullName"
                        placeholder="Full Name"
                    />
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginVertical: 10
                    }}
                >
                    <TouchableOpacity onPress={() => { setRemember(!remember) }}
                        style={{
                            width: 25,
                            height: 25,
                            borderColor: COLORS.green,
                            borderWidth: 3,
                            borderRadius: 6,
                            marginRight: 15,
                            backgroundColor: remember ? COLORS.green : 'transparent'

                        }}
                    >

                        <Image
                            source={icons.checkMarkIcon}
                            style={{
                                width: "100%",
                                height: "100%",
                                tintColor: remember ? COLORS.white : 'transparent'
                            }}
                        />

                    </TouchableOpacity>
                    <Text style={{ fontWeight: "bold", ...FONTS.h3 }}>Remember me</Text>
                </View>


                <Button
                    onPress={() => {
                        console.log("Sign Up")
                    }}
                    title="Sign up"
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: COLORS.green,
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                        height: 60,
                    }}
                    containerStyle={{
                        width: "100%",
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                />

                <View
                    style={{
                        flexDirection: "row",
                        marginVertical: SIZES.radius,
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginVertical: 10
                    }}
                >
                    <View
                        style={{
                            backgroundColor: COLORS.lightGray1,
                            height: 1,
                            width: "30%"
                        }}
                    >
                    </View>
                    <Text style={{
                        fontWeight: "bold",
                        width: "40%",
                        color: COLORS.gray,
                        textAlign: "center",
                        ...FONTS.h3
                    }}>or continue with</Text>
                    <View
                        style={{
                            backgroundColor: COLORS.lightGray1,
                            height: 1,
                            width: "30%"
                        }}
                    >

                    </View>
                </View>

                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: 'center',
                    marginVertical: 20,
                    justifyContent: "space-evenly",
                    height: 60
                }}>
                    <Button

                        loading={pressed1}
                        loadingProps={{
                            size: 'large',
                            color: COLORS.green,
                        }}

                        onPress={() => {
                            setPressed1(true)
                            setPressed2(false)
                            setPressed3(false)
                            console.log("Sign Up With Facebook")
                        }}

                        buttonStyle={{
                            backgroundColor: 'transparent',
                            borderColor: COLORS.lightGray1,
                            borderWidth: 1,
                            borderRadius: 15,
                            height: 60,
                        }}
                        containerStyle={{
                            width: 100,
                            borderRadius: 15,
                        }}
                    >
                        <Image
                            source={icons.facebookIcon}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </Button>

                    <Button
                        loading={pressed2}
                        loadingProps={{
                            size: 'large',
                            color: COLORS.green,
                        }}
    
                        onPress={() => {
                            setPressed1(false)
                            setPressed2(true)
                            setPressed3(false)
                            console.log("Sign Up With Google")
                        }}
                        buttonStyle={{
                            backgroundColor: 'transparent',
                            borderColor: COLORS.lightGray1,
                            borderWidth: 1,
                            borderRadius: 15,
                            height: 60,
                        }}
                        containerStyle={{
                            width: 100,
                            borderRadius: 15,
                        }}
                    >
                        <Image
                            source={icons.googleIcon}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </Button>

                    <Button
                        loading={pressed3}
                        loadingProps={{
                            size: 'large',
                            color: COLORS.green,
                        }}
    
                        onPress={() => {
                            setPressed1(false)
                            setPressed2(false)
                            setPressed3(true)
                            console.log("Sign Up With Apple")
                        }}
                        buttonStyle={{
                            backgroundColor: 'transparent',
                            borderColor: COLORS.lightGray1,
                            borderWidth: 1,
                            borderRadius: 15,
                            height: 60,
                        }}
                        containerStyle={{
                            width: 100,
                            borderRadius: 15,
                        }}
                    >
                        <Image
                            source={icons.appleIcon}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </Button>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: COLORS.gray, fontSize: 17}}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("LogInAccount")
                            console.log("Sign In")
                        }}
                    >
                        <Text style={{ color: COLORS.green, fontWeight: "bold", fontSize: 17}}>  Sign in</Text>
                    </TouchableOpacity>

                </View>
            </View >
        </KeyboardAwareScrollView>
    )
}

