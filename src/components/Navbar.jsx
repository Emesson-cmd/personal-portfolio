import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, usa, brazil, spain } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [currentLng, setCurrentLng] = useState('en');

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    let nextLng = '';

    if (currentLng === 'en') {
      setCurrentLng('pt');
      nextLng = 'pt';
    } else if (currentLng === 'pt') {
      setCurrentLng('es');
      nextLng = 'es';
    } else {
      setCurrentLng('en');
      nextLng = 'en';
    }

    i18n.changeLanguage(nextLng);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links flex items-center`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{t(nav.title)}</a>
            </li>
          ))}

          <li>
            <button onClick={changeLanguage}>
              <img
                src={currentLng === 'en' ? usa : currentLng === 'pt' ? brazil : spain}
                alt={currentLng}
              />
            </button>
          </li>
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'}`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-center justify-center  mt-[10rem] -ml-[35px] align-middle"
              >
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer align-middle`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{t(nav.title)}</a>
                  </li>
                ))}

                <li>
                  <button onClick={changeLanguage}>
                    <img
                      src={currentLng === 'en' ? usa : currentLng === 'pt' ? brazil : spain}
                      alt={currentLng}
                      width={64}
                      height={64}
                      className='mt-6'
                    />
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
