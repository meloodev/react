import { useState, useRef } from 'react';
import HandBookItem from './components/HandBookItem';
import PageNotFound from './components/PageNotFound';
import db from './data/db';

const App = () => {

  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(db);
  const timerRef = useRef(null);


  const inputValue = (e) => {
    const target = e.target.value;
    setValue(target);
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const result = db.filter(item =>
        item.css.toLowerCase().includes(target.toLowerCase().trim())
      );
      setFiltered(result);
    }, 300);
  }

  return (
    <div className="tailwind">
      <div className='mx-auto my-0 max-w-[1024px] px-[10px]'>
        <div className="tailwind__inner">
          <div className="py-[20px] px-0 text-[25px]">
            <h1 className='text-[clamp(1.438rem,-2.562rem+20.000vw,1.563rem)] font-semibold text-[#030712] text-center'>Tailwind CSS Handbook</h1>
          </div>
          <div className="tailwind__search mb-[20px] relative">
            <input id="search" type="text" value={value} onChange={inputValue} placeholder="type command" className='w-full pt-[5px] pr-[15px] pb-[5px] pl-[26px] border border-[#00000032] rounded-[0.25rem] placeholder:capitalize text-[13.3px] focus:border-[#00a6f4] focus:bg-[#f4f7ff] focus:outline-none' />
            <label htmlFor="search" className='absolute top-1/2 transform -translate-y-1/2 left-[5px]'>
              <i className="fa-solid fa-magnifying-glass text-[#0307128e]"></i>
            </label>
          </div>

          <table className='border-collapse w-full bg-white rounded-[10px]'>
            <thead>
              <tr className='border-b border-[#00000032]'>
                <th className='text-base capitalize font-semibold select-none p-[10px] text-left w-[40%]' scope="col">class</th>
                <th className='text-base capitalize font-semibold select-none p-[10px] text-left w-[60%]' scope="col">style</th>
              </tr>
            </thead>
            <tbody>

              {filtered.length > 0 ? filtered.map((item) => (
                <HandBookItem tailwind={item.tailwind} css={item.css} key={crypto.randomUUID()} />
              )) : (<PageNotFound />)}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;