import icon from '../../img/notification-icon.svg'
import './style.css'

function NotificationButton(): JSX.Element {
    return(
        <div className="dsmeta-red-btn">
          <img src={icon} alt="Notificar" />
        </div>
      
  )
    }
  
  export default NotificationButton