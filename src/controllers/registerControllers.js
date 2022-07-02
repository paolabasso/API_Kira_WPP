import { sendMessageCalendar } from "../services/axios.js"

const registerController = (req, res) =>{
    const { phone } = req.body
    const templateName = "kira_calendar"
    const requestAxios = {
        "messaging_product": "whatsapp",
        "to": phone,
        "type": "template",
        "template": {
            "name": templateName,
            "language": {
                "code": "pt_BR"
            }
        }
    }

    res.json(requestAxios).status(200)
    sendMessageCalendar(requestAxios);
}

export {registerController}