const { Note } = require('../db')




const getNotes = async (req, res) => {

   const DB_Notes = await Note.findAll()
   res.send(DB_Notes)
}


const createNote = async (req, res) => {
   try {
      const { title, content, userID } = req.body
      const newNote = await Note.create({
         title,
         content,
         userID
      })
      res.json(newNote)
   } catch (error) {
      res.send(error.message)
   }
}

const updateNote = async (req, res) => {
   const { id } = req.params
   try {
      const update = await Note.findOne({
         where: { id }
      })
      update.set(req.body)
      await update.save()
      res.json(update)
   } catch (error) {

   }
}

const deleteNote = async (req, res) => {
   const { id } = req.params
   try {
      await Note.destroy({
         where: { id }
      })
      res.send('Nota eliminada')
   } catch (error) {
      res.status(404).json({ 'error:': error.message })
   }

}

const getNoteID = async (req, res) => {
   const { id } = req.params
   try {
      const note = await Note.findAll({
         where: { id },
         atributes: ["title", "content"]
      })
      res.json(note)
   } catch (error) {
      res.status(404).json({ 'error:': error.message })
   }
}


module.exports = {
   createNote,
   getNotes,
   updateNote,
   deleteNote,
   getNoteID
}