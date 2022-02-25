const router = require('express').Router();
const multer = require('multer');
const { Animal } = require('../db/models');


const upload = multer({ dest:"public/images/"});


//animal
router.get('/', async (req, res) => {
const animal = await Animal.findAll({order: [['id', 'DESC']]})

   res.render('animal',{animal})
})



//ДОБАВЛЕНИЕ ручка для добавления животного
//animal/
router.post('/', upload.single('img'), async (req, res) => {
   // console.log('FILE',req.file);
   console.log('BODY',req.body);
   const id = req.session.userId
   const {title,description} = req.body
   const img = req.file.path.split('/').slice(1).join('/');
   try {
      const createAnimal = await Animal.create({
         img,
         title,
         description,
         user_id: id
       });
       res.redirect('/animal');
   } catch (error) {
      console.log(error);
   }
 
})

//УДАЛЕНИЕ
//animal/
//===============================================================================================================================================================
router.delete('/:id', async(req, res) => {
   console.log(req.params);

   const {id} = req.params;
   try {
      await Animal.destroy({where: {id}})
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500)
   }

})

// //===============================================================================================================================================================

// // //РЕДАКТИРОВАНИЕ
//animal/:id

router.put('/:id',async (req, res) => {
   const {id} = req.params;
   const {title, description} = req.body;
   try {
   const animalUpdate = await Animal.update({title, description},{where: {id}});
      res.sendStatus(200)
   } catch (error) {
      console.log(error);
      res.sendStatus(500)
   }
  
})





module.exports = router;
