import dayjs from "dayjs";
const dateFormater = () => {
    const now = dayjs(Date.now()).format('DD/MM');
    return now;
}

export default dateFormater;