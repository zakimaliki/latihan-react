import axios from "axios";
const createMonth = (data, setShow) => async (dispatch) => {
    try {
        const month = await axios.post("https://gofiber-production.up.railway.app/api/v1/month/create", data)
        alert("berhasil")
        window.location.reload();
        setShow(false);
        const result = month.data;
        dispatch({ type: "CREATE_MONTH", payload: result });
    } catch (err) {
        console.error(err.message);
        alert("create month failed");
        setShow(false);
    }
};

export default createMonth;