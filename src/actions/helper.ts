export const getDate = (isoDate: string) => {
    const timeStamp = Date.parse(isoDate);
    return `${new Date(timeStamp).toLocaleDateString()} ${new Date(timeStamp).toLocaleTimeString()}`;
}