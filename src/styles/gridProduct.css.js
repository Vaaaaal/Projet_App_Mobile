import { StyleSheet, Dimensions } from "react-native";
import { colors } from "./colors";

let dim = Dimensions.get('window');

export const gridProductStyle = StyleSheet.create({
    ctn_header:{
        height:90,
        backgroundColor:colors.pink,
        
    },
    header_lrb:{
        flex: 1,
        alignItems:'center'
    },
    header_title:{
        fontSize:22,
        fontWeight:'bold',
    },
    ctn_first:{
        flex:1,
    },
    ctn_center:{
        flex:0.98,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    center:{
        flex:1,
    },
    center_title:{
        flex:0.2,
        borderBottomWidth:1,
        borderBottomColor:colors.blue,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:86,
        paddingRight:86,
    },
    center_scroll:{
        flex:0.8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    
    ctn_arrow:{
        flex: .06,
        backgroundColor:colors.blue,
    },
    grid_product:{
        flex:1,
        justifyContent:'space-around',
        flexDirection:'row',
        flexWrap:'wrap',
        alignSelf:'center'
    },
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
        // resizeMode:'contain',
    },
    box_product_img:{
        position:'absolute',
        width: 90,
        height:120,
        paddingBottom:10
    },
    box_product_ctn_text:{
        flex:.25,
        flexDirection:'row'
    },
    center_title_text:{
        fontSize:20,
        color:colors.blue,
        textAlign:'center',
        fontWeight:'bold'
    },
    aside:{
        width:36,
        backgroundColor:colors.pink,
    },
    footer:{
        height:8,
        backgroundColor:colors.pink,
        flex:.02,
    },
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