import axios from "axios";
const getMonth = () => async (dispatch) => {
    try {
        const month = await axios.get("https://gofiber-production.up.railway.app/api/v1/month/data");
        const result = month.data;
        dispatch({ type: "GET_ALL_MONTH", payload: result });
    } catch (err) {
        console.error(err.message);
    }
};


export default getMonth;