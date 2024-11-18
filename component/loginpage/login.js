import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Linking } from 'react-native';
import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleLogin = () => {
        // Check if username and password are not empty
        if (username && password) {
            // Navigate to WelcomeScreen after login
            navigation.navigate('WelcomeScreen');
        } else {
            Alert.alert('Please enter both username and password.');
        }
    };

    const handleSignUp = () => {
        // Navigate to SignUpScreen
        navigation.navigate('SignUpScreen');
    };

    const handleForgotPassword = () => {
        Alert.alert('Forgot Password link clicked!');
    };

    const handleBusinessOwner = () => {
        Alert.alert('Business Owner link clicked!');
    };

    // Handle social media link clicks
    const handleOpenSocialMedia = (url) => {
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url);
                } else {
                    Alert.alert('Unable to open this link.');
                }
            })
            .catch((err) => console.error('Error opening link:', err));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <Text style={styles.welcomeText}>Welcome to!</Text>
            <Image source={require('../../assets/Exploredamilag.png')} style={styles.logo} />

            <View style={styles.inputGroup}>
                <FontAwesome name="user" size={20} color="green" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={styles.inputGroup}>
                <FontAwesome5 name="lock" size={20} color="green" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.togglePassword}>
                    <FontAwesome5 name={isPasswordVisible ? "eye-slash" : "eye"} size={20} color="grey" />
                </TouchableOpacity>
            </View>

            <View style={styles.rememberMeContainerLeft}>
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                    <FontAwesome
                        name={rememberMe ? "check-square" : "square-o"}
                        size={20}
                        color="green"
                    />
                </TouchableOpacity>
                <Text style={styles.rememberMeText}>Remember me</Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleBusinessOwner}>
                <Text style={styles.link}>If you are a business owner, Click Here!</Text>
            </TouchableOpacity>

            <View style={styles.socialLoginContainer}>
                <Text style={styles.socialLoginText}>Or Connect with</Text>
                <View style={styles.socialIcons}>
                    <TouchableOpacity onPress={() => handleOpenSocialMedia('https://www.facebook.com')}>
                        <FontAwesome name="facebook" size={32} color="#4267B2" style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOpenSocialMedia('https://www.google.com')}>
                        <AntDesign name="google" size={32} color="#DB4437" style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOpenSocialMedia('https://www.instagram.com')}>
                        <FontAwesome name="instagram" size={32} color="#E4405F" style={styles.socialIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // Keep the styles the same as in your original code
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 10,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        position: 'relative',
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        height: 50,
        paddingLeft: 40,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingRight: 40,
        color: '#000',
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
    togglePassword: {
        position: 'absolute',
        right: 10,
    },
    rememberMeContainerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
    },
    rememberMeText: {
        marginLeft: 10,
    },
    loginButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#28a745',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    signUpButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#28a745',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#007bff',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    socialLoginContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    socialLoginText: {
        marginBottom: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialIcon: {
        marginHorizontal: 10,
    },
});
