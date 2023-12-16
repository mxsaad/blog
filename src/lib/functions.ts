import { Timestamp } from "firebase/firestore/lite";

export const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return '';
    const { seconds, nanoseconds } = timestamp;
    if (!seconds || !nanoseconds) return '';
    return new Timestamp(seconds, nanoseconds).toDate().toLocaleDateString();
}

export const formatTimestamp = (timestamp: Timestamp) => {
    if (!timestamp) return '';
    const { seconds, nanoseconds } = timestamp;
    if (!seconds || !nanoseconds) return '';
    const date = new Timestamp(seconds, nanoseconds).toDate();
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}