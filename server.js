

const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
//	app.use(logger)

// app.get("/", (req, res) => {
	// console.log("Here")
	// //	res.status(200)./* send("status essaage") */json({ message: "Error not present" })
	// //	res.send("Howhigh?")
	// res.render('index', { text: "Bitchez" })
// })

const userRouter = require('./routes/users')

app.use('/users', userRouter)

/* function logger(req, res, next) {
	console.log(req.originalUrl)
	next()
} */

app.listen(3000)













