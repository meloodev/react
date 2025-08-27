import './handBookItem.css';
const HandBookItem = ({ css, tailwind }) => {
    return (
        <tr>
            <td>
                <code>{tailwind}</code>
            </td>
            <td>
                <code>{css}</code>
            </td>
        </tr>
    )
}

export default HandBookItem;