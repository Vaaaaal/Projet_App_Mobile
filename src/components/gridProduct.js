import React from 'react'

import { gridProductStyle } from '../styles/gridProduct.css';
import { ScrollView, View, Text, Image } from "react-native";
import Head from './fragments/header';
import Product from './fragments/product';







class GridProduct extends React.Component{
    render(){
        return(
            <View style={ gridProductStyle.ctn_first }>
                <Head/>
                <View style={gridProductStyle.ctn_center}>
                    <View style={ gridProductStyle.aside }></View>
                    <View style={ gridProductStyle.center }>
                        <View style={ gridProductStyle.center_title }>
                            <Text style={gridProductStyle.center_title_text }>Choisisez un des produits suivants et laisser votre avis pour recevoir un bon de reduction de 10% sur votre prochain achat !</Text>
                        </View>
                        <View style={ gridProductStyle.center_scroll }>
                            <View style={ gridProductStyle.ctn_arrow }></View>
                            <View style={ gridProductStyle.grid_product }>
                              <Product imageUri={require('../assets/img.png')} name="10 pains au chocolat Chabrior" price="2.25" weight="350g" />
                              <Product imageUri={require('../assets/img.png')} name="10 pains au chocolat Chabrior" price="2.25" weight="350g" /> 
                              <Product imageUri={require('../assets/img.png')} name="10 pains au chocolat Chabrior" price="2.25" weight="350g" /> 
                              <Product imageUri={require('../assets/img.png')} name="10 pains au chocolat Chabrior" price="2.25" weight="350g" /> 
                              <Product imageUri={require('../assets/img.png')} name="10 pains au chocolat Chabrior" price="2.25" weight="350g" /> 
                              <Product imageUri={require('../assets/img.png')} name="10 pains au chocolat Chabrior" price="2.25" weight="350g" />   
                            </View>
                            <View style={ gridProductStyle.ctn_arrow }></View>
                        </View>
                    </View>
                    <View style={ gridProductStyle.aside }></View>
                </View>
                <View style={ gridProductStyle.footer }></View>
            </View>
        )
    }
}
export default GridProduct;