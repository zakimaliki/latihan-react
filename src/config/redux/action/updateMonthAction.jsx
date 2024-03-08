import axios from "axios";
const updateMonth = (id, data, setShow) => async (dispatch) => {
    try {
        const month = await axios.put("https://gofiber-production.up.railway.app/api/v1/month/update/" + id, data)
        alert("berhasil")
        window.location.reload();
        setShow(false);
        const result = month.data;
        dispatch({ type: "UPDATE_MONTH", payload: result });
    } catch (err) {
        console.error(err.message);
        alert("update month failed");
        setShow(false);
    }
};

export default updateMonth;