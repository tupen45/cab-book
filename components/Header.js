import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // using MaterialIcons

const StylishHeader = ({ title, onBackPress, rightIcon, onRightPress, name,logout }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logout} style={styles.iconWrapper}>
        <Icon name="logout" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>{name}</Text>

      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.iconWrapper}>
          <Icon name={rightIcon} size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#2b2d42',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  iconWrapper: {
    padding: 6,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  iconPlaceholder: {
    width: 20,
    height: 20,
  },
});

export default StylishHeader;
