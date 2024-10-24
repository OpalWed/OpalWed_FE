export const convertToTitleCase = (str: string): string => {
    if (!str) return str; // In case the string is empty or undefined
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};