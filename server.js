
const { request } = require("express");
const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 5001
app.use(express.json())


const shows = {
    "p valley":{
        "Premise": "P-Valley is an American drama television series created by Katori Hall. The series is an adaptation of Hall's play, Pussy Valley, and follows several people who work at a strip club in the Mississippi Delta. It stars Brandee Evans, Nicco Annan, and Elarica Johnson.",
        "network": 'STARZ',
        "photo": "https://www.starz.com/us/en/series/p-valley/46156",
        
    },

    "the office":{
        "Premise": "The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
        "network": "NBC",
        "photo": "https://www.peacocktv.com/stream-tv/the-office"
    },

    "game of thrones":{
        "Premise": "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, and stars Emilia Clarke, Kit Harrington, and Peter Dinklage etc ",
        "network": "HBO",
        "photo": "https://www.hbomax.com/series/urn:hbo:series:GVU2cggagzYNJjhsJATwo"
    },
    "unknown":{
        "title": "Not in database"
    }
}

//app.use(express.json())
app.get('/', (request, response)=>{
    response.sendFile(__dirname + "/index.html")
})

app.get('/api/:showName', (request, response)=>{
    const showName = request.params.showName.toLowerCase()
    if(shows[showName]){
        response.json(shows[showName])
    }else{response.json(['unknown'])}
})







app.listen(process.env.PORT ||PORT, ()=>{
    console.log(`youre server is running on ${PORT}`)
})


