import React from 'react';

interface StoreCardProps {
  name: string;
  address: string;
  number: string;
  imageUrl: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ name, address, number, imageUrl }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-gray-800 border border-white/10 hover:border-white/20 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        <p className="text-sm text-gray-300 mb-1">
          <span className="mr-1">📍</span>{address}
        </p>
        <p className="text-sm text-gray-300">
          <span className="mr-1">📞</span>{number}
        </p>
      </div>
    </div>
  );
};

export default StoreCard;
