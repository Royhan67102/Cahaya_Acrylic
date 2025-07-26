import styles from './topItem.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function TopItem() {
  const [items, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const local = localStorage.getItem("data");
            if (local) {
                setDatas(JSON.parse(local));
            } else {
                try {
                    const response = await axios.get('/item.json');
                    setDatas(response.data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();

        const handleStorage = () => {
            const local = localStorage.getItem("data");
            if (local) setDatas(JSON.parse(local));
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
  
    }, []);

// localStorage.removeItem("data");


    return (
        <div className={styles.container}>
            <section className={styles.Package}>
              <h2>Top Product Item</h2>
                <div className={styles.package__container}>
                    {items.slice(0, 4).map((pack) => (
                        <div key={pack.id} className={styles.package__item}>
                            <h3>{pack.title}</h3>
                            <p>{pack.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TopItem;