import React from "react";

function useStorageListener(synchronize) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true);
        }
    });

    const toggle = () => {
        synchronize();
        setStorageChange(false);
    };

    return {
        show: storageChange,
        toggleShow: toggle
    };
}

export {useStorageListener};