import React from 'react'
import { Container, Header, Left, Body, Title, Right } from 'native-base';
import { styles } from '../../styles/gridProduct.css';

class Head extends React.Component{
    render(){
        return(
            <Header style={ styles.ctn_header }>
                <Left style={ styles.header_lrb } />
                    <Body style={ styles.header_lrb }>
                        <Title style={ styles.header_title }>VOUS AVEZ LA PAROLE !</Title>
                    </Body>
                <Right style={ styles.header_lrb }/>
            </Header>
            
        )
    }
}
export default Head;