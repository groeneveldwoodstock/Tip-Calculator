import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, TextInput, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        value: 0,
        convertedValue: 0,
        convertToCurrency: '',
        symbol: '$',
    }

    convertValue = (currency) => {
        if (currency == '10%') {
            this.setState({
                convertedValue: this.state.value * 1.1,
                convertToCurrency: '10% Tip',
                symbol: '$',
            })
        } else if (currency == '15%') {
            this.setState({
                convertedValue: this.state.value * 1.15,
                convertToCurrency: '15% Tip',
                symbol: '$',
            })
        } else if (currency == '20%') {
            this.setState({
                convertedValue: this.state.value * 1.20,
                convertToCurrency: '20% Tip',
                symbol: '$',
            })
        } else if (currency == '25%') {
            this.setState({
                convertedValue: this.state.value * 1.25,
                convertToCurrency: '25% Tip',
                symbol: '$',
            })
        } else if (currency == '30%') {
            this.setState({
                convertedValue: this.state.value * 1.30,
                convertToCurrency: '30% Tip',
                symbol: '$',
            })
        } else if (currency == '35%') {
            this.setState({
                convertedValue: this.state.value * 1.35,
                convertToCurrency: '35% Tip',
                symbol: '$',
            })
    }
}

    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.titleContainer}>
                    <Text style={styles.paragraph}>
                        Groeneveld's
                    </Text>
                    <Text style={styles.title}>
                        Tip Calculator
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.inputValueBox}>
                        <Text style={styles.paragraph}>
                            Input Original Bill:
                        </Text>
                        <TextInput style={styles.textInput}
                            returnKeyType='done'
                            keyboardType = 'numeric'
                            onChangeText={(value) => this.setState({value})}
                            value={this.state.value}
                        />
                    </View>
                    <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/51aba6b246bc5595ceb67981f51263fa' }}
                >
                <View style={styles.currencyBox}>
                        <View style={styles.currencyRow}>
                            <TouchableHighlight
                                onPress={() => this.convertValue('10%')}
                            >
                                <View style={styles.currencyButton}>
                                    <Text style={styles.currency}>
                                        10%
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.convertValue('15%')}
                            >
                                <View style={styles.currencyButton}>
                                    <Text style={styles.currency}>
                                        15%
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.currencyRow}>
                            <TouchableHighlight
                                onPress={() => this.convertValue('20%')}
                            >
                                <View style={styles.currencyButton}>
                                    <Text style={styles.currency}>
                                        20%
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.convertValue('25%')}
                            >
                                <View style={styles.currencyButton}>
                                    <Text style={styles.currency}>
                                        25%
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.currencyRow}>
                            <TouchableHighlight
                                onPress={() => this.convertValue('30%')}
                            >
                                <View style={styles.currencyButton}>
                                    <Text style={styles.currency}>
                                        30%
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => this.convertValue('35%')}
                            >
                                <View style={styles.currencyButton}>
                                    <Text style={styles.currency}>
                                        35%
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ImageBackground>
                </View>
                
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/44bfe911dd253cd6ca5b9555f9f766c3' }}
                >
                    <View style={styles.convertedContainer}>
                        <Text style={styles.paragraph}>
                            With Tip Added:
                        </Text>
                        <Text style={styles.title2}>
                            {this.state.symbol}{this.state.convertedValue.toFixed(2)}
                        </Text>
                        <Text style={styles.currency}>
                            {this.state.convertToCurrency}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center'
    },
    titleContainer: {
        height: 2*(deviceHeight/10),
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#808000',
        borderBottomWidth: 5,
        borderColor: 'white'
    },
    contentContainer: {
        height: 6*(deviceHeight/10),
        width: deviceWidth,
        backgroundColor: '#808080',
        justifyContent: 'center',
    },
    convertedContainer: {
        height: 2*(deviceHeight/10),
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white'
    },
    inputValueBox: {
        height: 2*(deviceHeight/10),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#728C00',
    },
    textInput: {
        height: deviceHeight/15,
        width: deviceWidth/2,
        fontSize: deviceHeight/20,
        borderWidth: 1,
        borderColor: '#483C32',
        marginTop: 10,
    },
    currencyBox: {
        height: 4.5*(deviceHeight/10),
        width: deviceWidth,
        
        justifyContent: 'center',
    },
    currencyRow: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    currencyButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        height: deviceHeight/10,
        width: deviceWidth/2.5,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 3,
        borderColor: '#483C32'
    },
    currency: {
        fontSize: deviceHeight/30,
        textAlign: 'center',
        color: '#806517',
    },
    title: {
        color: '#ffffcc',
        fontSize: deviceHeight/20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title2: {
        color: '#ffffcc',
        fontSize: deviceHeight/22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraph: {
        color: 'white',
        fontSize: deviceHeight/25,
        textAlign: 'center',
    },
});