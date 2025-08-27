import { useState, useRef } from 'react';
import HandBookItem from './components/HandbookItem/HandbookItem';
import PageNotFound from './components/PageNotFound/PageNotFound';
import db from './components/data/db';
import './App.css';



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
      <div className="container">
        <div className="tailwind__inner">
          <div className="tailwind__header">
            <h1>Tailwind CSS Handbook</h1>
          </div>
          <div className="tailwind__search">
            <input id="search" type="text" value={value} onChange={inputValue} placeholder="type command" />
            <label htmlFor="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
          </div>

          <table>
            <thead>
              <tr>
                <th scope="col">class</th>
                <th scope="col">style</th>
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