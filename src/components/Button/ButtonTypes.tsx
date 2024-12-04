import { TextStyle, TouchableOpacityProps } from 'react-native';

export interface ButtonTypes extends TouchableOpacityProps {
    label: string,
    textStyle?: TextStyle
}

