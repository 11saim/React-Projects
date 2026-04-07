export const getDate = (timeStamp) => {
    const dateObj = new Date(parseInt(timeStamp));

    const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1
        }/${dateObj.getFullYear()}`;

    return formattedDate;
};