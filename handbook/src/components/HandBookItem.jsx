// import './handBookItem.css';
const HandBookItem = ({ css, tailwind, value }) => {

    function highlightCSS(css, search) {
        const index = css.indexOf(search);
        if (index === -1) return css;

        const before = css.slice(0, index);
        const match = css.slice(index, index + search.length);
        const after = css.slice(index + search.length);

        // return before + '<mark>' + match + '</mark>' + after;
        return (
            <span>
                {before}
                <mark>{match}</mark>
                {after}
            </span>
        );
    }


    return (
        <tr className="border-b border-black/12 hover:bg-[#00000005]">
            <td className='text-[#00a6f4] text-sm p-2.5 text-left'>
                <code>{tailwind}</code>
            </td>
            <td className='text-[#7f22fe] text-sm p-2.5 text-left'>

                <span>{highlightCSS(css, value)}</span>
            </td>
        </tr>
    )
}

export default HandBookItem;