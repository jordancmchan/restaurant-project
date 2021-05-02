import contactMap from './assets/contactMap.jpg'
const ContactModal = () => {
    return(
        <div className="contactModal">
            <div className="contactModalContent">
                <div className="contactModalHeader">
                    <h4 className="contactModalTitle">
                        Contact & Hours
                    </h4>
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
                    <p>1234 Fake Address</p>
                </div>
                <div className="contactModalFooter">
                    <button className="contactModalButton">
                        close 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactModal