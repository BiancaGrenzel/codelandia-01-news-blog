import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100vw - 800px);
    padding: 32px 400px;
    background: #F3F5F7;
    height: calc(100vh - 196px - 64px);
    max-height: calc(100vh - 196px - 64px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 1400px) {
        width: calc(100vw - 300px);
        padding: 32px 150px;
    }
    @media (max-width: 700px) {
        width: calc(100vw - 64px);
        padding: 32px 32px;
    }
`