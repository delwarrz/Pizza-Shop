import React from 'react';
import Pizza from '../Components/Pizza';
import pizzas from '../pizzasdata';

function Home(){
    return(
        <div className="container">
            <div className="row">
                {
                    pizzas.map(pizza=>{
                        return  <div className="col-md-4 mb-5">
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                            </div>

                    })
                }
            </div>
        </div>
    )
}

export default Home;