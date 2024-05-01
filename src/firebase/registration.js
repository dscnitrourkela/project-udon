import { collection, addDoc, getDocs, query, where, updateDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const storeFormData = async formData => {
	try {
		const docQuery = query(collection(db, 'users'), where('email', '==', formData.email));
		const docSnapshot = await getDocs(docQuery);
		if (!docSnapshot.empty) {
			await updateDoc(docSnapshot.docs[0].ref, formData);
			return docSnapshot.id;
		} else {
			const docRef = await addDoc(collection(db, 'users'), formData);
			return docRef.id;
		}
	} catch (error) {
		console.error('Error adding document: ', error);
		throw error;
	}
};
