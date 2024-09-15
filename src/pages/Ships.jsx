
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const mfImage = '/mf.jpg';

function Ships() {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("https://swapi.dev/api/starships/")
      .then((res) => {
        setShips(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hata:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredShips = ships.filter(ship =>
    ship.name.toLowerCase().includes(search.toLowerCase())
  );



const handleButtonClick = (url) => {
    const id = url.match(/\/(\d+)\/$/)[1]; // URL'den ID'yi çıkarır
    navigate(`/ships/${id}`);
  };

  return (
    <>


{loading && <p>Yükleniyor...</p>}
    <div className='main'>
      <input
        type="text"
        placeholder='Ara...'
        value={search}
        onChange={handleSearch}
      />
      <button>Filtrele</button>
    </div>
    <hr />
    <div className='ships-container'>
      {filteredShips.map((ship) => (
        <div className='ships' key={ship.url}>
          <h3>{ship.name}</h3>
          <img src={mfImage} alt="Ship" className='img' />
          <button onClick={() => handleButtonClick(ship.url)}>Detayları Gör</button>
        </div>
      ))}
    </div>
    </>
  );
}

export default Ships;
