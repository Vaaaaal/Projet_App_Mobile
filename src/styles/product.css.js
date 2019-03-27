import { StyleSheet } from "react-native";
import { colors } from "./colors";


export const productStyle = StyleSheet.create({
    box_product:{
        marginLeft:35,
        marginRight:35,
        marginTop:5,
        marginBottom:5,
        width:180,
        height:210,
    },
    box_product_ctn_img:{
        flex:.75,
        alignItems:'center',
        justifyContent:'center'
    },
    circle:{
        width: 120,
        height: 120,
        backgroundColor:colors.grey,
        borderRadius:100,
    },
    box_product_img:{
        position:'absolute',
        width: 90,
        height:120,
        paddingBottom:10
    },

})