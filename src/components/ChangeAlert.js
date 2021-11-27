import React from "react";
import {withStorageListener} from "./withStorageListener";
import "../css/SyncronizeModal.css";
import ReactDOM from "react-dom";


function ChangeAlert({show, toggleShow}) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};