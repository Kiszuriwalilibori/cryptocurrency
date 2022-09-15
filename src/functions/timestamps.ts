import subMonths from "date-fns/subMonths";
import getUnixTime from "date-fns/getUnixTime";
import endOfYesterday from "date-fns/endOfYesterday";
import startOfYear from "date-fns/startOfYear";
import { timestampsType, timestampIDs } from "../types/types";

const timestamps: timestampsType = {
  content: [
    ["1D", () => getUnixTime(endOfYesterday())],
    ["1M", () => getUnixTime(subMonths(new Date(), 1))],
    ["5M", () => getUnixTime(subMonths(new Date(), 3))],
    ["12M", () => getUnixTime(subMonths(new Date(), 12))],
    ["30M", () => getUnixTime(subMonths(new Date(), 30))],
    ["YTD", () => getUnixTime(startOfYear(new Date()))],
  ],
  reducedLength: function () {
    return this.content.length - 1;
  },
  getValue: function (i: number) {
    return this.content[i][1]();
  },
  getTimestampID: function (i: number) {
    return this.content[i][0];
  },
  getContent: function () {
    return this.content;
  },
  getCodes: function (): timestampIDs[] {
    const result: timestampIDs[] = [];
    this.content.forEach(item => result.push(item[0]));
    return result;
  },
};

export default timestamps;
