import React, { useMemo } from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { COLORS } from '@theme/colors';

type ButtonProps = PressableProps & {
  label: JSX.Element | string;
  variant?: 'primary' | 'secondary';
  busy?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  style: exStyle,
  busy,
  ...restProps
}) => {
  const btnStyle = useMemo(() => {
    const style: StyleProp<ViewStyle> = [
      styles.button,
      styles.boxShadow,
      exStyle as StyleProp<ViewStyle>,
    ];

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
    <Pressable style={btnStyle} disabled={busy} {...restProps}>
      {busy ? (
        <ActivityIndicator size={20} />
      ) : (
        <Text style={styles.btnText}>{label}</Text>
      )}
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
    backgroundColor: COLORS.blue,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;
