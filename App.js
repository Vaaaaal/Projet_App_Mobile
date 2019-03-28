import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textSlogan}>VOUS AVEZ LA PAROLE !</Text>
        <View style={styles.containerRadius}>
          <View style={styles.inlineTxtImg}>
            <Image source={require('./assets/fleche.png')} style={styles.backArrow}></Image>
            <Text style={styles.back}>Retour</Text>
          </View>
          <View style={styles.centerContent}>
            <View style={styles.bgImg}>
              <Image></Image>
            </View>
            <Text style={styles.produit}>10 pains au chocolat</Text>
            <Text style={styles.marque}>Chabrior</Text>
            <Text style={styles.question}>Que pouvez-vous dire à propos de ce produit ?</Text>
            <TextInput
              style = {styles.input}
              placeholder = "Ecrivez votre avis ici"
              multiline = {true}
              numberOfLines = {5}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txtBtn}>ENVOYER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#de6072',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '8%',
    paddingHorizontal: '4%',
  },
  textSlogan: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 2,
  },
  containerRadius: {
    flex: 1,
    marginTop: '7%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '100%',
  },
  inlineTxtImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginLeft: 15,
  },
  backArrow: {
    width: 21.5,
    height: 14.5,
    marginRight: 10,
  },
  back: {
    color: '#372B76',
    textDecorationLine: 'underline',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImg: {
    backgroundColor: '#D3D3D3',
    borderRadius: 100,
    height: 200,
    width: 200,
  },
  produit: {
    // Au cas ou besoin
  },
  marque: {
    fontWeight: 'bold',
  },
  question: {
    marginTop: 15,
    color: '#372B76',
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingVertical: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  btn: {
    marginTop: 15,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#372B76',
    borderRadius: 20,
  },
  txtBtn: {
    color: '#fff'
  },
});
