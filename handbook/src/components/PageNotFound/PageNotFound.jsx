import './PageNotFound.css';
import './pageNotFound.css';

const PageNotFound = () => {
    return (
        <tr className="notFound">
            <td colSpan={2} style={{ width: '100%' }}>
                <h2>Item not found</h2>
                <h4>No records found in the database.</h4>
            </td>
        </tr>
    )
}

export default PageNotFound;