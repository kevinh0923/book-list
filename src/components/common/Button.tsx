import React, { useMemo } from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  label: JSX.Element | string;
  variant?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  style: exStyle,
  onPress,
}) => {
  const btnStyle = useMemo(() => {
    const style: any[] = [styles.button, styles.boxShadow, exStyle];

    switch (variant) {
      case 'primary': {
        style.push(styles.primaryBtn);
        break;
      }
      default:
        break;
    }

    return style;
  }, [variant, exStyle]);

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
