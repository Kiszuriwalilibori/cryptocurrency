import subMonths from "date-fns/subMonths";
import endOfYesterday from "date-fns/endOfYesterday";
import startOfYear from "date-fns/startOfYear";
import { Timestamps } from "types";

const timestamps: Timestamps = {
    IDs: ["1D", "1M", "5M", "12M", "30M", "YTD"],
    timestamps: [
        endOfYesterday(),
        subMonths(new Date(), 1),
        subMonths(new Date(), 3),
        subMonths(new Date(), 12),
        subMonths(new Date(), 30),
        startOfYear(new Date()),
    ],
    reducedLength: function () {
        return this.timestamps.length - 1;
    },
};

export default timestamps;
