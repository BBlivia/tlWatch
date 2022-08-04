const express = require("express");
const app = express();
const cors = require('cors')
const PORT = 5001

const MongoClient = require('mongodb').MongoClient


app.use(cors())
app.use(express.json())

const connectionString = 'mongodb+srv://livtv1:Power1tv@cluster1.nzkzfyp.mongodb.net/?retryWrites=true&w=majority'


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

MongoClient.connect(connectionString)
    .then(client => {
        console.log('it has worked, connected to tv show database')
        const db = client.db('shows')
        const infoCollection = db.collection('listOfShows')

    app.get('/', (request, response)=>{
    response.sendFile(__dirname + "/index.html")
    })

    app.get('/api/:showName', (request, response)=>{
        const showsList = request.params.showName.toLowerCase()
            infoCollection.find({name: showsList}).toArray()
         .then(results => {
            console.log(results)
            response.json(results[0])
        })
        .catch(error => console.error(error))
    })

})
.catch(error => console.error(error))









app.listen(process.env.PORT ||PORT, ()=>{
    console.log(`youre server is running on ${PORT}`)
})


