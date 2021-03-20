import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 30,
        flexDirection: 'row',
        zIndex: 100,
        justifyContent: 'space-between',
        paddingHorizontal: 10
        
    },
    logo: {
        resizeMode: 'contain',
        width: 100,
        height: 20
    },
    menu: {
        resizeMode: 'contain',
        width: 25,
        height: 25
    },
})

export default styles;