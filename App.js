import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import equilatero from './assets/equilatero.png'
import escaleno from './assets/escaleno.png'
import isosceles from './assets/isosceles.png'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      A: 0,
      B: 0,
      C: 0,
      result: '',
      img: ''
    }

    this.triangulo = this.triangulo.bind(this)

  }
  

  triangulo(){
  

    const A = parseFloat(this.state.A);
    const B = parseFloat(this.state.B);
    const C = parseFloat(this.state.C);

    if(A < (B + C) && B < (A + C) && C < (A + B)) {
      if(A == B && A == C && B == C) {
        this.state.result = 'É um triângulo Equilátero'
        this.state.img = equilatero
    } else if (A == B || A == C || B == C) {
        this.state.result = 'É um triângulo Isósceles'
        this.state.img = isosceles      
    } else {
        this.state.result = 'É um triângulo Escaleno'
        this.state.img = escaleno
      }

    } else {
      this.state.result = 'Não é um triangulo'
      this.state.img = ''
    }
    
    this.setState(this.state)
  }

  render(){
    return (
      <View style={{padding: 25}}>
        <TextInput
          style={styles.txtInput}
          keyboardType="numeric"
          placeholder="A"
          onChangeText={ (value) => this.setState({A: value})  }
        />

        <TextInput 
          style={styles.txtInput}
          keyboardType="numeric"
          placeholder="B"
          onChangeText={ (value) => this.setState({B: value}) }
        />

        <TextInput 
          style={styles.txtInput}
          keyboardType="numeric"
          placeholder="C"
          onChangeText={ (value) => this.setState({C: value}) }
        />
        
        <TouchableOpacity style={styles.button}
        onPress={this.triangulo}>
        <Text style={styles.buttonText}> Classificar </Text>
        </TouchableOpacity>

        <Text style={{margin:15, alignSelf: 'center'}}>
          {this.state.result}
        </Text>

        <Image source={this.state.img} 
        style={{width: 100, 
        height: 90, 
        alignSelf: 'center'
        }}/>
      </View>
    );
  }
  }

  const styles = StyleSheet.create({

    button:{
      backgroundColor:'steelblue',
      height: 30,
      width: 100,
      alignItems:'center',
      justifyContent:'center',
      marginBottom: 20,
      marginTop: 10,
      alignSelf: 'center'
    },
    buttonText:{
      color: 'white'
    },
    txtInput:{
      height: 40,
      padding: 15,
      marginBottom: 10
    }
  })
