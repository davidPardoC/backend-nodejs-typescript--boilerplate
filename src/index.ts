console.log('Hello from boilerplate')
import express from 'express'

const app = express()
const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
