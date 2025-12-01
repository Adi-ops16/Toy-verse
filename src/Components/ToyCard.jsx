import { Link } from 'react-router';
import { ToysContext } from '../provider/ToysProvider';

const ToyCard = ({ toy }) => {
    const { toyId, toyName, pictureURL, description, price } = toy || {}
    return (
        <div key={toyId} className="card w-96 shadow-sm">
            <figure className='bg-base-100 h-80'>
                <img className='object-contain'
                    src={pictureURL}
                    alt="Shoes" />
            </figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">{toyName}</h2>
                <p className='line-clamp-2'>{description}</p>
                <div className="card-actions justify-between items-center">
                    <p className='text-xl'>{price}TK</p>
                    <Link to={`/toy-details/${toyId}`} className="btn bg-[#6f4e37] text-white">View details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;