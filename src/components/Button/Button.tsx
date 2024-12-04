import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonTypes } from './ButtonTypes';
import { styles } from './ButtonStyles';

const Button = (props: ButtonTypes) => {
    const { onPress, disabled, label } = props;

    return <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.container, disabled && styles.containerDisabled]}>
        <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
    </TouchableOpacity>;
};

export default Button;
