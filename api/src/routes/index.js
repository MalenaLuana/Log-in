const { Router } = require('express');
const router = Router();
const { getUSers,createUSers,deleteUsers, getUserNotes} = require('../controllers/Users.controllers')
const{ createNote, getNotes, updateNote,deleteNote, getNoteID} = require ('../controllers/Notes.controlers')

//*---Users routes-----
router.get('/users',getUSers)

router.post('/users',createUSers)

router.put('/users')

router.delete('/users',deleteUsers)

router.get('/users/:id/notes',getUserNotes)

//?------ Notes routes----


router.get('/notes',getNotes)

router.post('/notes',createNote)

router.put('/notes/:id',updateNote)

router.delete('/notes/:id',deleteNote)

router.get('/notes/:id',getNoteID)

module.exports = router;