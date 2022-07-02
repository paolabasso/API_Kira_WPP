import axios from "axios";

const token = "EAAKNRGmfe9IBAI7TT8Nw7qx70CHNYXxea8mo5X4gUlZCZA9X7TrbClNpbQiN9wS3fdEzo7s4xY0tuDmheZBn0P5pzOuMENdxuHZBtLaHzj22UZBM58jWZC0tJULczZCDgHzGu0ncKAMPQKu59pHApCUyC2LrcXb6WVUnfxwmocMrQuK32ZAWdyoqjCz1qHd0IGM0ZAJgmaJ7Ej0uEblFUFMpZA";

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