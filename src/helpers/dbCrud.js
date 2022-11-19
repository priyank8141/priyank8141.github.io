import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export const submitFormEnquiry = async (data) => {
    data.created = Timestamp.now()
    try {
        const docRef = await addDoc(collection(db, 'portfolioEnquiry'), data)
        return docRef.id
    } catch (err) {
        console.log("FireBase err", err)
    }
}