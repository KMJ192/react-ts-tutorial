import React from 'react';

// interface GreetingsProps{
//     name : string;
//     test? : string;
// };

// const Greeting: React.FC<GreetingsProps> = ({name, test = "?"}) => {
//     return (
//         <div>
//             {name}{test}
//         </div>
//     );
// }

interface GreetingsProps{
    name : string;
    test? : string;
    onClick: (name: string) => void;
    children?: React.ReactNode;
};

function Greeting({name, test = "?", onClick, children}: GreetingsProps){
    const clickTest = () => {
        onClick(name);
    }
    return (
        <div>
            {name}, {test}
            <div>
                <button onClick={clickTest}>Click</button>
            </div>
        </div>
    );
}

export default Greeting;