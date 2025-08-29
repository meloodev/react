// import './handBookItem.css';
const HandBookItem = ({ css, tailwind, value }) => {

    function highlightCSS(css, search) {
        // const index = css.toLowerCase().indexOf(search.toLowerCase());
        //if (index === -1) return css;

        // const before = css.slice(0, index);
        // const match = css.slice(index, index + search.length);
        // const after = css.slice(index + search.length);

        if (!search) return css;
        const safeSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        const regex = new RegExp(`(${safeSearch})`, "gi");
        const parts = css.split(regex);

        return (
            <span>
                {parts.map((part, i) =>
                    part.toLowerCase() === search.toLowerCase() ? (
                        <span key={i} className="bg-[yellow] rounded-[2px]">
                            {part}
                        </span>
                    ) : (
                        part
                    )
                )}
            </span>
            // <span>
            //     {before}
            //     <span className="bg-[yellow]">{match}</span>
            //     {after}
            // </span>
        );
    }


    return (
        <tr className="border-b border-black/12 hover:bg-[#00000005]">
            <td className='text-[#00a6f4] text-sm p-2.5 text-left'>
                <code>{tailwind}</code>
            </td>
            <td className='text-[#7f22fe] text-sm p-2.5 text-left'>
                {highlightCSS(css, value)}
            </td>
        </tr>
    )
}

export default HandBookItem;