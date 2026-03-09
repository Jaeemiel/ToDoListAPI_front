import apiFetch from "./api.js";

export const categorieService = {
    getAll: () =>
        apiFetch("/categories").then(r => r.json()),

    getById: (id) =>
        apiFetch(`/categories/${id}`).then(r => r.json()),

    create: (categorie) =>
        apiFetch("/categories", {
            method: "POST",
            body: JSON.stringify(categorie)
        }).then(r => r.json()),

    update: (id, categorie) =>
        apiFetch(`/categories/${id}`, {
            method: "PUT",
            body: JSON.stringify(categorie)
        }).then(r => r.json()),

    delete: (id) =>
        apiFetch(`/categories/${id}`, {method: "DELETE"})
};