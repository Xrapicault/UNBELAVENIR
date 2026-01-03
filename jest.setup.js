import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('expo-font', () => ({
    loadAsync: jest.fn(),
    isLoaded: jest.fn(() => true),
}));

jest.mock('@expo/vector-icons', () => ({
    Ionicons: 'Ionicons',
}));
