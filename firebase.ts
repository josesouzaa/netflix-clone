// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCXj6Wp-fLB0PmHeu-0jui7Xrrv3Jw5Sw',
  authDomain: 'netflix-clone-a74dc.firebaseapp.com',
  projectId: 'netflix-clone-a74dc',
  storageBucket: 'netflix-clone-a74dc.appspot.com',
  messagingSenderId: '70915200615',
  appId: '1:70915200615:web:5179061dad094dfc66e6c2'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
