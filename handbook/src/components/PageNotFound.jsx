//  import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <tr className="notFound relative w-full">
            <td colSpan={2} className='pt-[1.25rem] w-full absolute left-1/2 transform -translate-x-1/2 text-center'>
                <h2 className='text-3xl text-[#030712] uppercase font-normal'>Item not found</h2>
                <h4 className='text-[15px] text-[#030712] uppercase font-normal'>No records found in the database.</h4>
            </td>
        </tr>
    )
}

export default PageNotFound;