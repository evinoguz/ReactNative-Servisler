import React from 'react'; 

import { StyleSheet, Text, View, FlatList, Image, Picker, ActivityIndicator, TouchableOpacity } from 'react-native';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true,
    selected_category:0 ,
    categories:[]
    }
  }
// hideNavBar
  componentDidMount() {
    return fetch('http://www.efeelektromekanik.com/ServislerCby/cbyWallpaper/public/api/home/list')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.data)
        this.getCategory();
        this.setState({
         
          dataSource: responseJson.data,
          //sd:'asd',
        });
      })
      .catch((error) => {
        console.error(error);
      }); 
  }
  yeniListe(value) {
    this.setState({
      isLoading: true,
    })
    if(value>0)
    return fetch('http://www.efeelektromekanik.com/ServislerCby/cbyWallpaper/public/api/home/list?categoryId='+value)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.data)
        this.getCategory();
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
          //sd:'asd',
        });
      })
      .catch((error) => {
        console.error(error);
      }); 
  }



  items(){
    // return(
    //   <Picker.item value={this.state.categories.id} label={this.state.categories.name} ></Picker.item>
    // ) 
    dizi=[]
    this.state.categories.forEach(element => {
    dizi.push(  <Picker.item value={element.id} label={element.name} ></Picker.item>)
    })
    return dizi
    
  }


  getCategory() {
    fetch('http://www.efeelektromekanik.com/ServislerCby/cbyWallpaper/public/api/photo/getCategory')
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log('ddd'+responseJson)
       // alert(responseJson.data[0].name)
      this.setState({  
        categories: responseJson,
        isLoading:false
      });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={
          {
            flex: 1,
            backgroundColor: '#a02400',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              color: 'white', margin:15, fontSize: 15,width:'30%'
            }}>Resim Galerisi</Text>
          <Picker selectedValue={this.state.selected_category}
           style={{height: 20, width: 100, backgroundColor:'white',margin:20, color:'black'}}
           onValueChange={(itemValue, itemIndex) =>
            this.yeniListe(itemValue)
            //this.setState({selected_category: itemValue})
          }
           >
              <Picker.item value={0} label={"Hepsi"} ></Picker.item>
              
                {this.items()}
          </Picker>

          </View></View>
        <View style={
          {
            flex: 8,
            backgroundColor: '#c4fbff',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding:15,
          }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) =>
            // onPress={()=><AppNavigator/>}
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Eleman',{
                  url:item.url,
                  name: item.name
                });
              }}>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: 'http://www.efeelektromekanik.com/ServislerCby/cbyWallpaper/public/api/photo/getImage?url=' + item.url }}/>
                <Text>{item.name}</Text>
                </TouchableOpacity>
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:21,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 







