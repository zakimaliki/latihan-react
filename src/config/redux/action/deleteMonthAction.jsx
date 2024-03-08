import axios from "axios";
const deleteMonth = (id, setShow) => async (dispatch) => {
    try {
        const month = await axios.delete("https://gofiber-production.up.railway.app/api/v1/month/delete/" + id)
        alert("berhasil")
        window.location.reload();
        setShow(false);
        const result = month.data;
        dispatch({ type: "DELETE_MONTH", payload: result });
    } catch (err) {
        console.error(err.message);
        alert("delete month failed");
        setShow(false);
    }
};

export default deleteMonth;