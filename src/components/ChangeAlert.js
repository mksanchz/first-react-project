import React from "react";
import "../css/SyncronizeModal.css";
import ReactDOM from "react-dom";
import {useStorageListener} from "./useStorageListener";

function ChangeAlert({synchronize}) {
    const {
        show,
        toggleShow,
    } = useStorageListener(synchronize);

    if (show) {
        return ReactDOM.createPortal(
            <div className="ModalBackground">
                <div className='SynchronizeModalMessage'>
                    <h2>There's some changes</h2>
                    <button onClick={() => toggleShow(false)}>Reload</button>
                </div>
            </div>,
            document.getElementById('modal')
        );
    } else {
        return null;
    }
}

export {ChangeAlert};