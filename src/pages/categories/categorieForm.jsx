import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { categorieService } from "../../services/categorieService.js";

const FORM_VIDE = { nom: "" };

function CategorieFormPage() {
    const { id } = useParams();         // undefined si creation, sinon id de la tâche
    const navigate = useNavigate();
    const [form, setForm] = useState(FORM_VIDE);
    const isEditing = !!id;             // vrai si on est sur /taches/:id/edit

    // Si édition → pré-remplir le formulaire
    useEffect(() => {
        if (isEditing) {
            categorieService.getById(id).then(setForm);
        }
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = isEditing
            ? categorieService.update(id, form)
            : categorieService.create(form);

        action.then(() => navigate("/"));   // retour liste apres submit
    };

    return (
        <div className="container py-4">
            <Link to="/" className="btn btn-secondary mb-4">
               Retour à la liste
            </Link>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title mb-4">
                        {isEditing ? "Modifier la catégorie" : "Nouvelle catégorie"}
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nom</label>
                            <input
                                className="form-control"
                                name="nom"
                                value={form.nom}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="d-flex gap-2">
                            <button className="btn btn-primary" type="submit">
                                {isEditing ? "Modifier" : "Ajouter"}
                            </button>
                            <Link to="/" className="btn btn-outline-secondary">
                                Annuler
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CategorieFormPage;
