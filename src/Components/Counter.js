import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);//starting with 0

    return (
        <div>
           <h1 data-testid="counter-value">{count}</h1>{/*it will display the current number */}

            {/* when button is clicked increment happens */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;