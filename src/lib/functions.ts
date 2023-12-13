import { Timestamp } from "firebase/firestore/lite";

export const formatDate = (timestamp: {seconds: number, nanoseconds: number}) => {
    const { seconds, nanoseconds } = timestamp;
    if (!seconds || !nanoseconds) {
        console.error('Timestamp is undefined');
        return '';
    }
    return new Timestamp(seconds, nanoseconds).toDate().toLocaleDateString();
}

export const formatTimestamp = (timestamp: {seconds: number, nanoseconds: number}) => {
    const { seconds, nanoseconds } = timestamp;
    if (!seconds || !nanoseconds) {
        console.error('Timestamp is undefined');
        return '';
    }
    const date = new Timestamp(seconds, nanoseconds).toDate();
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}