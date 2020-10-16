import Reactotron from 'reactotron-react-native';

// (_DEV_) variavel que só exeutado quando estiver em desenvolvimento.
if (__DEV__) {
    const tron = Reactotron.configure({host: '192.168.0.105'})
    .useReactNative()
    .connect();

    console.tron = tron;

    // limpa o Reactotron toda vez que acontece um refrash
    tron.clear();
}
