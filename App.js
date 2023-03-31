import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>A text with styles and beauties</Text>
      <Text style={styles.lerolero}>Por conseguinte, o acompanhamento das preferências de 
        consumo acarreta um processo de reformulação e 
        modernização dos níveis de motivação departamental.</Text>
        <Image></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lerolero:{
    flex: 1,
    color: 'white',
    textAlign: 'center'
  }
});
