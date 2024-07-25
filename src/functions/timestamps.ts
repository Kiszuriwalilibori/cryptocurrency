import subMonths from "date-fns/subMonths";
import endOfYesterday from "date-fns/endOfYesterday";
import startOfYear from "date-fns/startOfYear";
import { TimestampIDs } from "types";

interface TimestampsItem {
    ID: TimestampIDs;
    timestamp: Date;
}
export interface Timestamps {
    items: TimestampsItem[];
    reducedLength: () => number;
    getTimestamps: () => TimestampsItem["timestamp"][];
    getIDs: () => TimestampsItem["ID"][];
}

const timestamps: Timestamps = {
    items: [
        { ID: "1D", timestamp: endOfYesterday() },
        { ID: "1M", timestamp: subMonths(new Date(), 1) },
        { ID: "5M", timestamp: subMonths(new Date(), 3) },
        { ID: "12M", timestamp: subMonths(new Date(), 12) },
        { ID: "30M", timestamp: subMonths(new Date(), 30) },
        { ID: "YTD", timestamp: startOfYear(new Date()) },
    ],
    reducedLength: function () {
        return this.items.length - 1;
    },
    getTimestamps: function () {
        const timestamps = this.items.map(item => item.timestamp);
        return timestamps;
    },
    getIDs: function () {
        const timestamps = this.items.map(item => item.ID);
        return timestamps;
    },
};

export default timestamps;
