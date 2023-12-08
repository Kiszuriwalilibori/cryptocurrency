/**
 * Checks whether given moment is within today
 * @param interval number in miliseconds indicating how much earlier is date for comparision
 * @returns if it is same day false, otherwise true
 */

const hasDateChanged = (interval: number): boolean => {
    const now = new Date();
    const before = new Date(now.getTime() - interval);

    return !(
        before.getDate() === now.getDate() &&
        before.getMonth() === now.getMonth() &&
        before.getFullYear() === now.getFullYear()
    );
};
export default hasDateChanged;
