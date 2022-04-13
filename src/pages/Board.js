import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';

function Board() {
    const [cardList, setCardList] = useState("");
    const token = sessionStorage.getItem('Token');
    
    const getCardList = async () => {
        const body = await axios.get("/api/card/list", {
                headers: {
                    Authorization: token}
                })
                .then(function(response) {
                    setCardList(response.data);
                }).catch(function(error) {
                    console.log('**ERROR at GET request** => ' + error.response)
                    console.log(error);
                })
    }

    function CardListItem({ item }) {
        const { card_id, card_content, card_create_date, card_update_date, card_write } = item;

        return (
            <div>
                <div>{card_id}</div>
                <div>{card_content}</div>
                <div>{card_create_date}</div>
                <div>{card_update_date}</div>
                <div>{card_write}</div>
            </div>
        );
    }

    function LoadCardList({ items }) {
        return (
            <ul>
                {items && items.map((item) => (
                    <li key={item.card_id}>
                      <CardListItem item={item} />
                    </li>
                ))}
            </ul>
        )
    }

    useEffect(() => {
        getCardList();
    }, []);
   
    return(
        <div>
            <LoadCardList items={cardList}/>
        </div>
    )
}

export default Board;