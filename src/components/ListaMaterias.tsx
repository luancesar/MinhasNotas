import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Português',
    notaDistribuida: 10,
    notaRecebida: 10,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Matemática',
    notaDistribuida: 10,
    notaRecebida: 10,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ed. Física',
    notaDistribuida: 10,
    notaRecebida: 10,
  },
];

const Item = ({ title, notaDistribuida, notaRecebida }:any) => (
  <View style={styles.item}>
    <Text style={styles.title}>  {title} || {notaDistribuida} || {notaRecebida}  </Text>

  </View>
);

const ListaMaterias = () => {
  const renderItem = ({ item }:any) => (
    <Item title={item.title} notaDistribuida={item.notaDistribuida} notaRecebida={item.notaRecebida} />
  );

  return (
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#2E64FE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default ListaMaterias;