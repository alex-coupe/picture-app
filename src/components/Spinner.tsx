import React from 'react';
import { faSpinner} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Spinner : React.FC = () => {
    return (
        <div>
            <FontAwesomeIcon size="10x" className="spinner" icon={faSpinner} />
        </div>
    )

}

export default Spinner;