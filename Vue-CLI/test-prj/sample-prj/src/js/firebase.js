import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAQZ9o-0g_5fybwySyS6Zv03sqSulNYXKc",
    authDomain: "webmobile-test.firebaseapp.com",
    databaseURL: "https://webmobile-test.firebaseio.com",
    projectId: "webmobile-test",
    storageBucket: "webmobile-test.appspot.com",
    messagingSenderId: "73530886394",
    appId: "1:73530886394:web:91847b841a88dcb1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

let portfolios = [];

export default {
    async getPortfolios() {
        let snapshot = await db.collection('portfolios').orderBy('title', "desc").get();

        snapshot.docs.forEach(doc => {
            portfolios.push({
                title: doc.data().title,
                content: doc.data().content,
                imgURL: doc.data().imgURL,
                created_at: doc.data().created_at
            });
            console.log("test" + doc.data().test)
        })
        return portfolios
    },
    postPortfolio(title, content, img) {
        return db.collection('portfolios').add({
			title,
			content,
			img,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
    }
}