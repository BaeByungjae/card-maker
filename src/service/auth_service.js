import firebase from 'firebase';
class AuthService{
    login(providerName){
        const authProvider=new firebase.auth[`$[probiderName]AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService