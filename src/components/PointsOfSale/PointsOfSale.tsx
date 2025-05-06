import React, { useEffect, useState } from 'react';
import StoreCard from './StoreCard';

interface Store {
  id: number;
  name: string;
  address: string;
  number: string;
  imageUrl: string;
}

const PointsOfSale: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    fetch('/puntosventa.json')
      .then(res => res.json())
      .then(data => setStores(data))
      .catch(err => console.error("Error al cargar locales:", err));
  }, []);

  return (
    <section id="puntos-venta" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Encuéntranos en...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map(store => (
            <StoreCard
              key={store.id}
              name={store.name}
              number={store.number}
              address={store.address}
              imageUrl={"images/puntosventa/" + store.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsOfSale;
