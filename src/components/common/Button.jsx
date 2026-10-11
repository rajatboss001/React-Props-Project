
import { Link } from 'react-router-dom'

const Button = ({text, link,}) => {
    if (!text) return null
    return (
        <Link to={link || '#'} className='text-white cursor-pointer px-31.5 mt-7.5 bg-off-white rounded-full py-4 font-normal text-base'>
            {text}
        </Link>
    )
}

export default Button
