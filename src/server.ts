import app from './app'
const port = process.env.PORT || 4400
app.express.listen(port, () => console.log(`Server is running on port ${port}`))
