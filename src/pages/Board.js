import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router';

function Board() {
    const navigate = useNavigate();
    const [cardList, setCardList] = useState("");
    const token = sessionStorage.getItem('Token');
    
    const getCardList = async () => {
        await axios.get("/api/card/list", {
                headers: {
                    Authorization: token}
                })
                .then(function(response) {
                    setCardList(response.data);
                }).catch(function(error) {
                    console.log('**ERROR at GET request**')
                    console.log(error);
                    navigate("/")
                })
    }

    function CardListItem({ item }) {
        const { card_id, card_content, card_create_date, card_update_date, card_writer } = item;

        return (
            <div className='cardListDiv'>
                <div className="divContent">{card_id}</div>
                <div className="divContent">{card_content}</div>
                <div className="divContent">{card_create_date}</div>
                <div className="divContent">{card_update_date}</div>
                <div className="divContent">{card_writer}</div>
            </div>
        );
    }

    function LoadCardList({ items }) {
        return (
            <ul id="ulCard">
                {items && items.map((item) => (
                    <li key={item.card_id}>
                      <CardListItem item={item} />
                    </li>
                ))}
            </ul>
        )
    }

    function handleLogOut() {
        sessionStorage.removeItem('Token');
        navigate("/")
    }

    useEffect(() => {
        getCardList();
    }, []);
   
    return(
        <>
        <div>
            <button onClick={handleLogOut}>
                Logout
            </button>
        </div>
        <div>
            <LoadCardList items={cardList}/>
        </div>
        </>
    )
}

export default Board;