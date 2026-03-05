import {Link} from "react-router-dom";

function CategorieList({categories, onEdit, onDelete}){
    if (!categories || categories.length === 0){
        return <p className="text-muted">Aucune catégorie pour le moment. </p>;
    }

    return (
        <table className="table table-striped table-hover align-middle">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {categories.map(categorie => (
                    <tr key={categorie.id}>
                        <td>{categorie.id}</td>
                        <td>
                            <Link to={`/categories/${categorie.id}`}>{categorie.nom}</Link>
                        </td>

                        <td className="d-flex gap-2">
                            <Link
                                to={`/categories/${categorie.id}/edit`}
                                className="btn btn-sm btn-outline-warning"
                                onClick={() => onEdit(categorie.id)}
                            >
                                Modifier
                            </Link>
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => onDelete(categorie.id)}
                            >
                                Supprimer
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CategorieList;