import React from 'react';

const MainHistory = ({history}) => {
    return(
    <section>
        <h1>외않되?</h1>
        <button className="btn_game"
            onClick={function(e){
            e.preventDefault();
            console.log('click');
            history.push("/make");
            }}>게임하러 가기!</button>

    </section>
    )
    
    };

export default MainHistory;