import logo from '../../../../public/logo.png'
import moment from 'moment';
moment().format();

const Header = () => {
    return (
        <div className='text-center mt-3'>
            <img src={logo} className='mx-auto' />
            <h1 className='text-[#706f6f] mt-2'>Journalism Without Fear or Favour</h1>
            <p className='text-[#706f6f] font-medium'><span className='text-[#403f3f]'>{moment().format('dddd,')}</span>{moment().format(' MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;