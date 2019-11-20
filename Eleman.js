import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image} from "react-native"; 


export default class Eleman extends React.Component {
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={()=>  this.props.navigation.goBack()}>
            <Text style={{color:'black',margin:10, padding:10, backgroundColor:'#b7d3d4', fontSize:20, width:70, height:50}}>Geri</Text></TouchableOpacity>
            
            <Text>{this.props.navigation.state.params.name}</Text>
            <Image
                style={{ width: 300, height: 510 }}
                source={{ uri: 'http://www.efeelektromekanik.com/ServislerCby/cbyWallpaper/public/api/photo/getImage?url=' + this.props.navigation.state.params.url }} />
            </View>
        );
    }
}
