import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignSelf: 'center',
        width: '800px',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2, 
        borderColor: 'red', 
        borderRadius: 5, 
        borderStyle: 'dashed',
        shadowColor: 'rgba(255, 0, 0, 0.5)',
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5,
        backgroundColor: '#FFF0F5',
        marginVertical: '10%'
        
    },
    image: {
        width: '450px',
        height: '200px',
        aspectRatio: 1,
        marginBottom: 20,
    },
    input: {
        width: '55%',
        fontSize: 15,
        color: '#fff',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#808080', 
    },
    buttonContainer: {
        width: '55%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  
export default styles;