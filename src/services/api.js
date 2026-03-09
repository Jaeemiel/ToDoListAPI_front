const API_URL = import.meta.env.VITE_API_URL;

const apiFetch = (endpoint, options = {}) => {
    const token = localStorage.getItem("token");
    const fullUrl = `${API_URL}${endpoint}`;
    alert("URL complète appelée :" + fullUrl);
    // alert("VITE_API_URL :" + API_URL);
    // alert("endpoint :" + endpoint);
    const headers = {
        "Content-Type": "application/json",
        ...(token && {Authorization: `Bearer ${token}`}),
        ...options.headers,
    };

    return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });
};





export default apiFetch;