import axios from "axios";

export function editData(id, item){
    return (dispatch) => {
        return axios.put("https://api.vschool.io/jordan/todo/" + id, item).then((response)=>{
            dispatch(loadData());
        }).catch((error)=>{
            throw error;
        });
    }
}

export function removeData(id){
    return (dispatch) => {
        return axios.delete("https://api.vschool.io/jordan/todo/" + id).then((response) => {
            dispatch(loadData());
        }).catch((error) =>{
            throw error;
        });
    }
}

export function addData(item) {
    return (dispatch) => {
        return axios.post("https://api.vschool.io/jordan/todo/", item).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        });
    }
}

export function loadData() {
    return (dispatch) => {
        return axios
            .get("https://api.vschool.io/jordan/todo/")
            .then((response) => {
                dispatch(setData(response.data));
            })
            .catch((error) => {
                throw error
            });
    }
}

export function setData(items) {
    return {type: "SET_DATA", items}
}