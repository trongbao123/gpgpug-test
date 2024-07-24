import { rate } from '../../../../constants';
import './index.scss';


const renderRate = () => {
    return rate.map((item) => {
        return (
            <div key={item.id} className='rate-item'>
                <div className='rate-item-top'>
                    {item.title}
                </div>
                <div className='rate-item-bottom'>
                    {item.content}
                </div>
            </div>
        )
    })
}
const Rate = () => {
    return <section className="rate-container">
        <div className='grid-rate'>
            {renderRate()}
        </div>
    </section>
}
export default Rate;