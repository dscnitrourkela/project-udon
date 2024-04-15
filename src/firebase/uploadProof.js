import { collection, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from './firebaseConfig';

// add proofURL to the doc using uid
export const updateDocumentByUid = async (userId, proofURL) => {
	try {
		const q = query(collection(db, 'users'), where('uid', '==', userId));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			const userDoc = querySnapshot.docs[0];

			// Update the document by adding proof of payment
			await updateDoc(userDoc.ref, {
				paymentProof: proofURL,
			});
		} else {
			console.log('No documents found matching the name: ', userId);
		}
	} catch (error) {
		console.error('Error updating document:', error);
		throw error;
	}
};
