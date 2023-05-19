import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

const Fab = ({title, onPress, position = 'bl'}: Props) => {
  return (
    <>
      <TouchableOpacity
        style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Fab;
