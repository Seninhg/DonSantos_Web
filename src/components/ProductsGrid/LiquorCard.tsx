type LiquorCardProps = {
  name: string;
  price: number;
  image: string;
  description?: string;
};

export default function LiquorCard({ name, price, image, description }: LiquorCardProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-800 hover:bg-gray-700 transition-shadow duration-300">
      <img className="w-full h-56 object-cover" src={image} alt={name} />
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-200">{name}</div>

        {description && (
          <p className="text-gray-400 text-base">{description}</p>
        )}
      </div>
      
      <div className="px-6 pb-4 flex justify-between items-center">
        <span className="text-lg font-semibold text-amber-500">${price}</span>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-xl">
          Comprar
        </button>
      </div>
    </div>
  );
}
