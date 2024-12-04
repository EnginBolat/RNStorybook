import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDisabled: {
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    label: {
        fontWeight: '500',
        fontSize: 14,
        color: 'black',
    },
    labelDisabled: {
        color: 'rgba(0,0,0,0.5)',
    },
});
