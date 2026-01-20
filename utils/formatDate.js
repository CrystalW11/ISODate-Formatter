import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

// 1. Long Format: Thursday, January 21, 2023
export const formatLongDate = (isoDate) => {
    return dayjs(isoDate).format('dddd, MMMM D, YYYY');
};

// 2. Short Format: 01/21/2023
export const formatShortDate = (isoDate) => {
    return dayjs(isoDate).format('MM/DD/YYYY');
};

// 3. Relative Format: 4 months ago
export const formatRelativeDate = (isoDate) => {
    return dayjs(isoDate).fromNow();
};