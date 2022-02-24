import axios from "axios";

export const getThemeList=()=>
    axios
        .get("/api/theme")
        .then(response => response.data)