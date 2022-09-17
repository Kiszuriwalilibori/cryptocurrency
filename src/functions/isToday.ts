/**
 * Checks whether given moment is within today
 * @param someDate
 * @returns if it is today true, otherwise false
 */

const isToday = (someDate: Date): boolean => {
    const today = new Date();
    return (
        someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
    );
};
export default isToday;
