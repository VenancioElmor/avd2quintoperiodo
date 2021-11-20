import { Container } from "./styles";

interface PropsPost {
    id: string, 
    nomeevento: string, 
    local: string, 
    diasemana: string, 
    horario: string,
    like: number | string,
    dislike: number | string,
    handeDelete: (id: string) => void,
    handeLike: (id: string) => void,
    handeDislike: (id: string) => void,
}

export function Post({ id, nomeevento, local, diasemana, horario, like, dislike, handeDelete, handeLike, handeDislike,}: PropsPost) {
    return (
        <Container>
            <h4>
                {nomeevento}
            </h4>

            <div className="description">
                {local} - {diasemana} {horario}
            </div>
            
            <div className="actions">
                <button onClick={() => { handeDelete(id) }} >
                    <svg viewBox="0 0 24 24" className="delete" >
                        <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </button>
                
                <button onClick={() => { handeLike(id) }} >
                    <svg viewBox="0 0 24 24" className="like" >
                        <path fill="currentColor" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                    </svg>

                    {
                        !like ? "" : ( <strong>{like}</strong> )
                    }                    
                </button>
                
                <button onClick={() => { handeDislike(id) }} >
                    <svg viewBox="0 0 24 24" className="dislike" >
                        <path fill="currentColor" d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z" />
                    </svg>

                    {
                        !dislike ? "" : ( <strong>{dislike}</strong> )
                    }                    
                </button>
            </div>
        </Container>
    );
}