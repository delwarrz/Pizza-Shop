import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizza } from '../actions/PizzaAction';
import Pizza from '../Components/Pizza';

function Home(){    
    const dispatch = useDispatch();

    const pizzasstate = useSelector((state) => state.getAllPizzaReducer);

    const {pizzas, error, loading} = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizza());
    }, []);

    return(
        <div className="container">
            <div className="row">
                {
                    loading ? (
                            <h2>Loading...</h2>
                        ): error ? (
                            <h2>Something went wrong!</h2>
                        ):(
                        pizzas.map(pizza=>{
                            return  <div key={pizza._id} className="col-md-4 mb-5">
                                <div>
                                    <Pizza pizza={pizza} />
                                </div>
                                </div>
    
                        })
                    )
                }                
            </div>
        </div>
    )
}

export default Home;