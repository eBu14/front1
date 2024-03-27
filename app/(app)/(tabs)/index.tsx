import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const soundTypes = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Deep work',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Chill',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Self care',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Homework',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Warmup',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Workout',
  },
];

const Data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function TabOneScreen(): React.ReactNode {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            EASE INTO THE EVENING
          </Text>
        </View>
        <FlatList
          data={Data}
          keyExtractor={(item) => `${item.id}`}
          horizontal={true}
          // eslint-disable-next-line react/no-unused-prop-types
          renderItem={({ item }: { item: any }) => (
            <View style={{}}>
              <View
                style={{
                  marginLeft: 22,
                  height: 180,
                  width: 120,
                  borderWidth: 2,
                  borderRadius: 7,
                  borderColor: 'white',
                  backgroundColor: 'white',
                }}>
                <Text>ll</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{ marginTop: 70, height: 200 }}>
        <View>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: '400', margin: 20 }}>
            Scenarios
          </Text>
        </View>
        <FlatList
          data={soundTypes}
          horizontal={true}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexWrap: 'wrap' }}>
              <View style={{ backgroundColor: 'grey', padding: 7, borderRadius: 11, margin: 3 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>{item.name}</Text>
              </View>
              <View style={{ backgroundColor: 'grey', padding: 7, borderRadius: 11, margin: 3 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>{item.name}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            EASE INTO THE EVENING
          </Text>
        </View>
        <FlatList
          data={Data}
          keyExtractor={(item) => `${item.id}`}
          horizontal={true}
          // eslint-disable-next-line react/no-unused-prop-types
          renderItem={({ item }: { item: any }) => (
            <View style={{}}>
              <View
                style={{
                  marginLeft: 22,
                  height: 180,
                  width: 120,
                  borderWidth: 2,
                  borderRadius: 7,
                  borderColor: 'white',
                  backgroundColor: 'white',
                }}>
                <Text>ll</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
