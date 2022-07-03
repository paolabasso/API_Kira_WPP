import axios from "axios";
import dotenv from 'dotenv';

dotenv.config()

const token = process.env.TOKEN

const sendMessageCalendar = async (data) => {
    try{
        const response = await axios.post('https://graph.facebook.com/v13.0/107069228731129/messages', data, {
            headers: {'Content-type':'application/json',
                    'Authorization': `Bearer ${token}`}
        });
    } catch(err){
        console.error(err)
    }
}

export {sendMessageCalendar}