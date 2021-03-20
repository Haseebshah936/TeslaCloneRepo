import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      textContainer:{
        marginTop: '30%',
        alignItems: 'center',
      },
      title:{
        fontSize: 36,
        fontWeight: 'bold'
      },
      subTitle:{
        fontSize: 16,
        color: '#5c5e6a'
      },
      button:{
          position: 'absolute',
          width: '100%',
          bottom: 30
      },
      subTitleCTA:{
          textDecorationLine: 'underline',
      }
});

export default styles;