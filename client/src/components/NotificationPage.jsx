<<<<<<< HEAD
import { useEffect, useState } from 'react';
import Notification from '../components/Notification';

const NotificationPage = () => {
    const [data, setData] = useState([]);
    const backapi = 'http://localhost:5000';
    const [notify, setNotify]=useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${backapi}/api/auth/notifications`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
              
            });

            if (response.ok) {
                const result = await response.json();
                console.log("result", result)
                setData(result.data);
            }
        };

=======

import { useEffect, useState } from 'react';
import Notification from '../Components/Notification';

const NotificationPage = () => {
    const [data, setData] = useState([]);
    const backapi = 'http://localhost:5000';
    const [notify, setNotify]=useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${backapi}/api/auth/notifications`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
              
            });

            if (response.ok) {
                const result = await response.json();
                console.log("result", result)
                setData(result.data);
            }
        };

>>>>>>> 1e7bd8a7b2f428acf6663cc38a2b891d5e7bf08f
        fetchData();
    }, []);

    useEffect(()=> {
      setNotify(true)
      console.log(data,"dataaaaaaaaaaaaaaaaa")
    },[data])

    return (
        <div>
            {notify ? <Notification notification={data}/>: <></> }
        </div>
    );
};

<<<<<<< HEAD
export default NotificationPage;
=======
export default NotificationPage;
>>>>>>> 1e7bd8a7b2f428acf6663cc38a2b891d5e7bf08f
