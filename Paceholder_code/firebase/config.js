import * as firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDD-2F7iECe2DufGq_gUUrm44YA8egmc7w_AIzaSyAOWH',
    authDomain: 'paceholder-92f28.firebaseapp.com',
    databaseURL: 'https://paceholder-92f28.firebaseio.com',
    projectId: 'paceholder-92f28',
    storageBucket: 'paceholder-92f28.appspot.com',
    messagingSenderId: '216033159192',
    appId: '1:216033159192:ios:de85faf47bdb4e4e51fb6d',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };