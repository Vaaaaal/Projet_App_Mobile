import React from 'react'

import { View, Image, Text, StyleSheet } from "react-native";
import { colors } from '../../styles/colors';
import { productStyle } from '../../styles/product.css';


class Product extends React.Component {
    render() {
        return (
            <View style={productStyle.box_product}>
                <View style={productStyle.box_product_ctn_img}>
                    <View style={productStyle.circle}></View>
                    <Image style={productStyle.box_product_img} source={this.props.imageUri}></Image>
                </View>
                <View style={productStyle.box_product_ctn_text}>
                    <View style={{ flex: .7, borderRightColor: colors.black, borderRightWidth: 1, padding: 3 }}>
                        <Text style={{ color: colors.black }}>{this.props.name}</Text>
                    </View>
                    <View style={{ flex: .3, padding: 3 }}>
                        <Text style={{ fontWeight: '700', color: colors.black }}>{this.props.price}</Text>
                        <Text style={{ color: colors.black }}>{this.props.weight}</Text>
                    </View>
                </View>
            </View>

        )
    }
}



export default Product;