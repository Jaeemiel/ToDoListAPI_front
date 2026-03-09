import apiFetch from "./api.js";

export const tacheService = {
    getAll: () =>
        apiFetch("/taches").then(r => r.json()),

    getById: (id) =>
        apiFetch(`/taches/${id}`).then(r => r.json()),

    create: (tache) =>
        apiFetch("/taches", {
            method: "POST",
            body: JSON.stringify(tache)
        }).then(r => r.json()),

    update: (id, tache) =>
        apiFetch(`/taches/${id}`, {
            method: "PUT",
            body: JSON.stringify(tache)
        }).then(r => r.json()),

    delete: (id) =>
        apiFetch(`/taches/${id}`, {method: "DELETE"})
};