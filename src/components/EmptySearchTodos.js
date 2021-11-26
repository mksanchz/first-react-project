import React from 'react';

function EmptySearchTodos({searchValue}) {
    return (
        <p>¡Vaya no encontramos coincidencias para {searchValue}!</p>
    );
}

export {EmptySearchTodos};