import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 5rem;

    border-bottom: 1px solid #ccc;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 5rem;
        }
        strong {
            font-size: 2rem;
            height: min-content;
        }
    }

    button {
        padding: .5rem;
        font-size: 1rem;
        font-weight: 700;
        background-color: #ccc;

    }

`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 1rem 0;
    }
    input, button {
        width: 100%;
        padding: 10px 14px;
        border-radius: 16px;
        margin-bottom: 1rem;
    }
`;