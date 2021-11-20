import { Post } from "../Post";
import { Container } from "./styles";
import axios from 'axios';
import { useEffect, useState } from "react";

interface Ievent {
    id: string,
    nomeevento: string,
    local: string,
    diasemana: string,
    horario: string,
    like: number | string,
    dislike: number | string,
}

export function Dashboard() {
    const [events, setEvents] = useState<Ievent[]>([]);

    function listEvents() {
        axios({
            method: 'get',
            url: 'http://localhost:3333/events',
        })
        .then(response => {
            setEvents(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    function handeDelete(id: string) {
        axios({
            method: 'delete',
            url: 'http://localhost:3333/events/' + id
        })
        .then(response => {
            const newEvents = events.filter(e => e.id !== id);

            setEvents(newEvents);
        })
        .catch(error => {
            console.log(error);
        });
    }

    function handeLike(id: string) {
        axios({
            method: 'post',
            url: 'http://localhost:3333/events/like/' + id
        })
        .then(response => {
            const newEvents = events.map(e => {
                let newItem = e;
                
                if (e.id === id) {
                    newItem =  response.data;
                }

                return {
                    ...newItem
                };
            });

            setEvents(newEvents);
        })
        .catch(error => {
            console.log(error);
        });
    }

    function handeDislike(id: string) {
        axios({
            method: 'post',
            url: 'http://localhost:3333/events/dislike/' + id
        })
        .then(response => {
            const newEvents = events.map(e => {
                let newItem = e;

                if (e.id === id) {
                    newItem = response.data;
                }

                return {
                    ...newItem
                };
            });

            setEvents(newEvents);
        })
        .catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        listEvents();
    }, []);

    return (
        <Container>
            {events.map(post => {
                return (
                    <Post 
                        key={post.id} 
                        id={post.id}
                        nomeevento={post.nomeevento}
                        local={post.local}
                        diasemana={post.diasemana}
                        horario={post.horario}
                        like={post.like}
                        dislike={post.dislike}

                        handeDelete={() => { handeDelete(post.id) }}
                        handeLike={() => { handeLike(post.id) }}
                        handeDislike={() => { handeDislike(post.id) }}
                    />
                );
            })}
        </Container>
    );
}
