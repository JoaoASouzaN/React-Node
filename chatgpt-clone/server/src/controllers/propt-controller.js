const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openia")

module.exports = {
    async sendText(req, res){    
        try{
            const openaiAPI = openai.configuration()
            const inputModel = new inputPrompt(req.body.prompt)    
            const response = await openaiAPI.completions.create(openai.textCompletion(inputModel.prompt)).asResponse();
            const jsonResponse = await response.json()
            return res.status(200).json({
                sucess:true,
                data: jsonResponse.choices[0].text
            })
        }
        catch(error){
            console.log(error)
            return res.status(error.status).json({
                sucess: false,
                error: error.error?.message || "there was an inssue on the server"
            })
        }
    }
}