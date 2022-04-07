const Database = require ('../db/config')

module.exports = {
  async index(req, res) {
    const db = await Database()
    const roomID = req.params.room;
    const questionId = req.params.question;
    const action = req.params.action;
    const password = req.body.password

    const isRoom = await db.get(`SELECT * FROM rooms WHARE id = ${roomId}`)
    if (isRoom.pass == password)
      if(action == "delete") {

        await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

    } else if (action == "check") {

        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
        
        res.redirect(`/room/${roomId}`)

      } else {

        res.render('passincorrect', {roomId: roomId})

      }
    
  },

  async create(req, res) {
    const db = await Database()
    const question = req.body.question
    const room =req.params.room

    await db.run(`INSERT INTO questions(
      title,
      room
      read
    )VALUES(
     " ${question}",
      ${room},
      0
    )`)
    res.redirect(`/room/${roomId}`)
  }
}