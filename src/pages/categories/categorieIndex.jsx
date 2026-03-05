import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { categorieService } from "../../services/categorieService.js";
import CategorieList from "../../components/CategorieList.jsx";

function CategorieIndex() {
    const [categories, setCatergories] = useState([]);
    const navigate = useNavigate();

    const chargerCategories = () => {
        categorieService.getAll()
            .then(data => {
                if (Array.isArray(data)) setCatergories(data);
            })
            .catch(err => console.error("Erreur chargement catégories", err));
    };

    useEffect(() => {
        chargerCategories();
    }, []);

    const handleUpdate = (id) => {
        navigate(`/categories/${id}/edit`);
    };
    const handleDelete = (id) => {
        categorieService.delete(id).then(chargerCategories);
    };

    return (
        <div className="container py-4">
            <h1 className="text-center">ToDo List</h1>
            <div className="text-center m-4">
                <Link to="/categories/create" className="btn btn-primary">
                    Nouvelle catégorie
                </Link>
            </div>
            <CategorieList categories={categories} onDelete={handleDelete} onEdit={handleUpdate}/>
        </div>
    );
}

export default CategorieIndex;