import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                setStorageChange(true);
            }
        });

        const toggle = () => {
            props.synchronize();
            setStorageChange(false);
        };

        return (
            <React.Fragment>
                <WrappedComponent
                    show={storageChange}
                    toggleShow={toggle}
                />
            </React.Fragment>
        );
    };
}

export {withStorageListener};