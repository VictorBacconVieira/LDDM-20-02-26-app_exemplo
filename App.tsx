import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, mundo!</Text>
      
      <TouchableOpacity onPress={()=> alert('Botão clicado!')}>
        <View style={styles.botaoView}>
          <Text style={styles.botaoText}>Botão clicável</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc6471',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color:'#fff',
    fontWeight:'bold',
    fontSize:25,
  },
  botaoView:{
    borderRadius:15,
    backgroundColor:'#cc2323',
    padding:15,
  },
  botaoText:{
    fontSize:15,
    color:'#fff'
  }
});
