import { useEffect } from 'react';

const LoggerComponent = ({ counter }) => {
    useEffect(() => {
        console.log('Mounted'); //componentDidMount
        return () => {
            console.log('Unmounted'); //componentWillUnmount
        };
    }, []);

    useEffect(() => {
        console.log('Updated'); //componentDidUpdate
    }, [counter]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Interval running...'); //componentDidMount
        }, 1000);
        return () => clearInterval(interval); //componentWillUnmount
    }, []);

    return <div>Logger Component (counter: {counter})</div>;
};

export default LoggerComponent;