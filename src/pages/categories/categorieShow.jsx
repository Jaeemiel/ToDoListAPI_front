import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {categorieService} from "../../services/categorieService.js";


function CategorieShow() {
    const { id } = useParams();       // recupere l'id dans l'URL
    const navigate = useNavigate();   // pour rediriger apres suppression
    const [categorie, setCategorie] = useState(null);

    useEffect(() => {
        categorieService.getById(id).then(setCategorie);
    }, [id]);

    const handleDelete = () => {
        categorieService.delete(id).then(() => navigate("/"));
    };

    if (!categorie) return <div className="container py-4">Chargement...</div>;

    return (
        <div className="container py-4">
            <Link to="/" className="btn btn-secondary mb-4">
                Retour à la liste
            </Link>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{categorie.nom}</h2>
                </div>
                <div className="card-footer d-flex gap-2">
                    <Link
                        to={`/taches/${id}/edit`}
                        className="btn btn-outline-warning"
                    >
                       Modifier
                    </Link>
                    <button
                        className="btn btn-outline-danger"
                        onClick={handleDelete}
                    >
                       Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CategorieShow;