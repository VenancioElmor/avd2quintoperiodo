import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem 1rem;
    margin: 1rem 0;

    border-radius: 16px;
    background-color: #ccc;

    h4, .description {
        margin-bottom: 1rem;
    }

    h4 {
        font-size: 1.9em;
    }
    
    .description {
        font-size: 1.5em;
    }

    .actions {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        margin-right: 1.5rem;
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        strong {
            margin-left: 1rem;
        }

        .delete {
            color: red;
        }
        .like {
            color: green;
        }
        .dislike {
            color: #7a7a7a;
        }
    }
`;