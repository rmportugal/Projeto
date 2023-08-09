import './alert.css';
import { BiSolidInfoCircle } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

function AlertComponent({ textAlert, onClose, type }) {

    const closeNotify = () => {
        onClose();
    }

    const alert = `alert show ${type === 'success' ? 'successalert' : 'alert'}`;

    return (
        <div className={alert}>
            <span className='iconAlert'><BiSolidInfoCircle /></span>
            <span className='textAlert'>{textAlert}</span>
            <span className='close-btn' onClick={closeNotify}>
                <span className='close-btn-icon'><AiFillCloseCircle /></span>
            </span>
        </div>
    );
}

AlertComponent.propTypes = {
    textAlert: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired ,
    type: PropTypes.func.isRequired
};

export default AlertComponent;
