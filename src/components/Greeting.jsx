import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({message}) {
    const randomMessage = () => message[Math.floor(Math.random() * message.length)];
    const [greeting, setGreeting] = useState(message[0]);
    return (
        <div>
            <h3>{greeting}! Thank tou for visiting!</h3>
            <button onClick={() => setGreeting(randomMessage())}>New Greeting
            </button>
        </div>
    );
}