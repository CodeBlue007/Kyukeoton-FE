import { useCallback ,useState,useEffect } from "react";
import { Text, Image,TouchableHighlight, View ,StyleSheet,TouchableOpacity} from "react-native";
import Button from "./components/Button";
import {LinearGradient} from "expo-linear-gradient"
import { ListItem } from '@rneui/themed';
import axios from 'axios'
import Spinner from "../../components/Spinner";

function HomeScreen({ navigation }) {

  const a = 1
  const b = 2
  const c = 3
  const [title1,setTitle1] = useState({})
  const [title2,setTitle2] = useState({})
  const [title3,setTitle3] = useState({})
  const [expanded1,setExpanded1] = useState(false)
  const [expanded2,setExpanded2] = useState(false)
  const [expanded3,setExpanded3] = useState(false)
  const [isLoading, setLoading] = useState(true);
  const list2 = [{'name':'hi','subtitle':'asd'},{'name':'hi','subtitle':'asd'}]

  const handleToSecond = (num) => {
    if(num === 1){
      navigation.navigate("Details");
    }
    else if (num === 2) {
      navigation.navigate("SecondScreen1", { categoryId: 5 });
    }
    else if (num === 3) {
      navigation.navigate("ThirdScreen1", { categoryId: 7 });
    }
  }


  useEffect(()=>{
    axios.get('http://13.124.233.9:8080/categories')
      .then(function (response) {
        setTitle1(response.data[0])
        setTitle2(response.data[1])
        setTitle3(response.data[2])
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])

  if (isLoading) {
    return (<Spinner />)
}

  return (
    <LinearGradient
        colors={['#0091EA','#9EDAFF']}
        style={styles.container1}
        >
      <Image
        style={styles.tinyLogo2}
        source={require('../../../assets/yes2.png')}
        />
    <View style={{ flex: 1, alignItems: "center",justifyContent: "center",zIndex:7}}>
        <ListItem.Accordion
          content={
      
            <ListItem.Content>
                <ListItem.Title style={{color:'#0061C1',marginLeft:125,marginTop:7, fontStyle: 'normal',fontWeight: 700,fontSize: 18,lineHeight: 22,}}>{title3.name}</ListItem.Title>
            </ListItem.Content>
      
          }
          isExpanded={expanded1}
          style={styles.list}
          onPress={() => {
            setExpanded1(!expanded1);
          }}
        >
      {title1.subCategories.map((l, i) => (
        <View key={i} bottomDivider style={styles.semilist}>
          <ListItem.Content >
          <TouchableOpacity
          style={styles.button}
          onPress={() => handleToSecond(1)}
            ><ListItem.Title style={{color:'#ffffff',marginLeft:138}}>{l.name}</ListItem.Title>
          </TouchableOpacity>
          </ListItem.Content>
        </View>
      ))}
    </ListItem.Accordion>

    <ListItem.Accordion
          content={
        
              <ListItem.Content>
                <ListItem.Title style={{color:'#F39C12',marginLeft:125,marginTop:7, fontStyle: 'normal',fontWeight: 700,fontSize: 18,lineHeight: 22,}}>{title2.name}</ListItem.Title>
              </ListItem.Content>
      
          }
          isExpanded={expanded2}
          style={styles.list}
          onPress={() => {
            setExpanded2(!expanded2);
          }}
        >
      {title2.subCategories.map((l, i) => (
        <View key={i} bottomDivider style={styles.semilist}>
          <ListItem.Content>
            <TouchableOpacity
            style={styles.button}
            onPress={() => handleToSecond(2)}
              ><ListItem.Title style={{color:'#ffffff',marginLeft:120}}>{l.name}</ListItem.Title>
            </TouchableOpacity>
          </ListItem.Content>
        </View>
      ))}
    </ListItem.Accordion>

    <ListItem.Accordion
          content={
    
              <ListItem.Content>
                <ListItem.Title style={{color:'#20E100',marginLeft:125,marginTop:7, fontStyle: 'normal',fontWeight: 700,fontSize: 18,lineHeight: 22,}}>{title3.name}</ListItem.Title>
              </ListItem.Content>

          }
          isExpanded={expanded3}
          style={styles.list}
          onPress={() => {
            setExpanded3(!expanded3);
          }}
        >
      {title3.subCategories.map((l, i) => (
        <View key={i} bottomDivider style={styles.semilist}>
          <ListItem.Content>
            <TouchableOpacity
            style={styles.button}
            onPress={() => handleToSecond(3)}
              ><ListItem.Title style={{color:'#ffffff',marginLeft:120}}>{l.name}</ListItem.Title>
            </TouchableOpacity>
          </ListItem.Content>
        </View>
      ))}
    </ListItem.Accordion>




      
    </View>
      <Image
        style={styles.tinyLogo3}
        source={require('../../../assets/GG.png')}
        />
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center'
  },
  tinyLogo2:{
    width:91,
    height:91,
    top:20,
    left:37,

    zIndex:2
},
tinyLogo3:{
  width:142,
  height:234,
  bottom:60,
  left:200,
  zIndex:5,

},
list11:{
  // width:20,
  height:62,
  borderRadius:16,
  overflow:'hidden',
  textAlign:'center',
  padding:'auto'
},
list:{
  width:320,
  height:62,
  borderRadius:16,
  overflow:'hidden',
  marginBottom:20,
  backgroundColor:'white'
},
text:{
  textAlign:'center',
  margin:'auto'
},
semilist:{
  width:320,
  height:55,
  borderRadius:16,
  borderBottomRightRadius:16,
  overflow:'hidden',
  backgroundColor:'#0061C1',
  marginBottom:15,

},
semilist1:{
  borderRadius:16,
  overflow:'hidden'
  
}
})

export default HomeScreen;



