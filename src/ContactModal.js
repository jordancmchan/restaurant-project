import contactMap from './assets/contactMap.jpg'
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ContactModal = (props) => {
    return(
        <div className="contactModal">
            <div className="contactModalContent">
                <div className="contactModalHeader">
                    <h4 className="contactModalTitle">
                        Contact & Hours
                    </h4>
                    <FontAwesomeIcon icon={faTimes} className="closeIcon" onClick={props.onClose}/>
                </div>
                <div className="contactModalBody">
                    <div className="hours">
                        <p>Monday 9-6</p>
                        <p>Tuesday 9-6</p>
                        <p>Wednesday 9-6</p>
                        <p>Thursday 9-6</p>
                        <p>Friday 9-6</p>
                        <p>Saturday 9-6</p>
                        <p>Sunday 9-6</p>
                    </div>
                    <div className="mapContainer">
                        <img src={contactMap} alt="stock street map"/>
                    </div>
                    <div className="addressNumber">
                        <p>1234 Fake Address</p>
                        <p>123-123-1234</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default ContactModal