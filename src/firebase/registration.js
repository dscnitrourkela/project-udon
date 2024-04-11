import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const storeFormData = async formData => {
	try {
		const docRef = await addDoc(collection(db, 'users'), formData);

		return docRef.id;
	} catch (error) {
		console.error('Error adding document: ', error);
		throw error;
	}
};
