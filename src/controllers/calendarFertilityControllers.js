import { sendMessageCalendar } from "../services/axios.js"

const calendarController = (req, res) =>{
    const { phone, calendar_fertility } = req.body
    const requestAxios = {
            "messaging_product": "whatsapp",
            "to": phone,
            "type": "template",
            "template": {
                "name": calendar_fertility,
                "language": {
                    "code": "pt_BR"
                }
            }
        }
    res.json(requestAxios).status(200)
    sendMessageCalendar(requestAxios);
}

export {calendarController}