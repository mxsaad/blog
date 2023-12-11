import { Timestamp } from "firebase/firestore/lite";

export const formatDate = ({seconds, nanoseconds}: {seconds: number, nanoseconds: number}) => {
    return new Timestamp(seconds, nanoseconds).toDate().toLocaleDateString()
}