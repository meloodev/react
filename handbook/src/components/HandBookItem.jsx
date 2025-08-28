// import './handBookItem.css';
const HandBookItem = ({ css, tailwind }) => {
    return (
        <tr className="border-b border-black/12 hover:bg-[#00000005]">
            <td className='text-[#00a6f4] text-sm p-2.5 text-left'>
                <code>{tailwind}</code>
            </td>
            <td className='text-[#7f22fe] text-sm p-2.5 text-left'>
                <code>{css}</code>
            </td>
        </tr>
    )
}

export default HandBookItem;