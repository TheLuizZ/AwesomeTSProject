import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFFFFF',
    flex:1,
    justifyConstent: 'center',
    alignItems: 'center',
  },

  containerButton:{
    justifyConstent: 'space-between',
    alignItems: 'center',
    margin:25,
  },

  image: {
    width: 200,
    height: 200,
    marginTop: 100,
  },

  textTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 40,
  },

  text:{
    fontSize: 15,
    textAlign: 'center',
    marginTop:10,
    marginHorizontal: 60,
  },
});

export default styles;