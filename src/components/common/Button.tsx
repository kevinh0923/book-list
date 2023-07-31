import React, { useMemo } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  label: JSX.Element | string;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, variant, onPress }) => {
  const btnStyle = useMemo(() => {
    const style: any[] = [styles.button, styles.boxShadow];

    switch (variant) {
      case 'primary': {
        style.push(styles.primaryBtn);
        break;
      }
      default:
        break;
    }

    return style;
  }, [variant]);

  return (
    <Pressable style={btnStyle} onPress={onPress}>
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
  },
  boxShadow: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  container: {},
  primaryBtn: {
    backgroundColor: '#002B56',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;
