import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const storeFormData = async formData => {
	try {
		const docRef = await addDoc(collection(db, 'users'), formData);

		console.log('Document written with ID: ', docRef.id);

		return docRef.id;
	} catch (error) {
		console.error('Error adding document: ', error);
		throw error;
	}
};
