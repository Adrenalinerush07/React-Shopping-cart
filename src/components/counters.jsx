import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    
    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props
        return (    
            <div>
                <button 
                    onClick={onReset}
                    className="btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {counters.map(counter => 
                    < Counter
                        onDelete={onDelete}
                        handleIncrement={onIncrement}
                        counter={counter}
                        // id={counter.id} 
                        // value={counter.value} 
                        // selected={true} 
                        key={counter.id}
                    > 
                        <h4>Counter #{counter.id}</h4>
                    </ Counter>
                )}
            </div>
         );
    }
}
 
export default Counters;