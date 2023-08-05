import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseconfig = {
  apiKey: 'AIzaSyA8gvpfeeILHu62Mojtk2sJnT7fwWouQ74',
  authDomain: 'jobfinder-b1272.firebaseapp.com',
  projectId: 'jobfinder-b1272',
  storageBucket: 'jobfinder-b1272.appspot.com',
  messagingSenderId: '168972898923',
  appId: '1:168972898923:web:c6e71b439645931c3c572e',
  measurementId: 'G-BL55GVWQ5N',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseconfig)
}

export { firebase }
