import style from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style)
function Header() {
    return (<div className={cx('wrapper')}>
        <div className={cx('inner')}>

            <img src={images.logo} alt='TikTok' />

            <div className={cx('search')}>
                <input placeholder='Search' spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button className={cx('search__button')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

            </div>
            <div>Action</div>

        </div>
    </div>);
}

export default Header;