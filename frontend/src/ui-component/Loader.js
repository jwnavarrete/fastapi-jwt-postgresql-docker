import React from 'react';
import styled from 'styled-components';
// styles
const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
});

// ==============================|| LOADER ||============================== //
const Loader = () => (
    <LoaderWrapper>
        <h1>Cargando</h1>
        {/* aqui va el spiner */}
    </LoaderWrapper>
);

export default Loader;