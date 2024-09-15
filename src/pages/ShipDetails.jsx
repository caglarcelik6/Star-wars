
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import '../App.css';

const mfImage = '/mf.jpg';

function ShipDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);


useEffect(() => {
    setLoading(true);
    axios.get(`https://swapi.dev/api/starships/${id}/`)
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Hata:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Yükleniyor...</p>;
  if (!details) return <p>Gemi detayları bulunamadı.</p>;

  return (
    <>

      <div className='ships-container'>
        <div className='ships2'>
          <h3>{details.name}</h3>
          <img src={mfImage} alt="Ship" className='img' />
          
          <p>Manufucturer:{details.manufacturer}</p>
          <p>Cost in Credits:{details.cost_in_credits}</p>
          <p>Lenght:{details.length}</p>
          <p>Speed:{details.max_atmosphering_speed}</p>
          <button onClick={() => navigate('/')}>Geri Dön</button>
        </div>
      </div>
    </>
  );
}

export default ShipDetails;
