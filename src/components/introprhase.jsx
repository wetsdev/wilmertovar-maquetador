import "./../styles/Introprhase.css";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export function Introphrase({ id }) {

  const { scroll } = useLocomotiveScroll()

  return (
    <div id={id}>
      <div className="flex-container">
        <div className="flex-item-left"
        data-scroll
          data-scroll-speed="2"
          data-scroll-position="top">
          <svg
            width="464"
            height="465"
            viewBox="0 0 464 465"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M464 0H93.5V101.5H291.5L0 393L71.5 464.5L363.5 172.5V388.5H464V0Z"
              fill="#D6F379"
            />
          </svg>
        </div>
        <div className="flex-item-right">
          <h1 className="title-mix">
            Disfruta de la <br />
            <span>mejor música</span>
          </h1>
          <p className="p-16">
            Accede a tu cuenta para guardar tus
            <br /> albumes favoritos.
          </p>
          <button className="btn-intro" onClick={()=>{
           scroll.scrollTo('#contact')
          }}>
            <span>Contacta</span>
          </button>
        </div>
      </div>
    </div>
  );
}
