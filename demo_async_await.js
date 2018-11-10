/* POST todo. */
// create todo
router.post('/', function (req, res, next) {
    const {
        title,
        description
    } = req.body;
    model.Todo.create({
            title: title,
            description: description
        })
        .then(todo => res.status(201).json({
            error: false,
            data: todo,
            message: 'New todo has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
//async - await
router.post('/', async (req, res, next) => {
    try {
        const { title, description } = req.body;
        let result = await model.Todo.create({
            title: title,
            description: description
        })
        if (result) {
                        res.status(200).send('Created note success')
                    } else {
                        res.status(404).send('Created note faile')
                    }
    }catch (e) {
        console.log('error', e)
    }
});

//update a todo
router.put('/:id', function (req, res, next) {
 
    const todo_id = req.params.id;
 
    const { title, description } = req.body;
 
    model.Todo.update({
            title: title,
            description: description
        }, {
            where: {
                id: todo_id
            }
        })
        .then(todo => res.json({
            error: false,
            message: 'todo has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
//async await
router.put('/:id', async (req, res, next) => {
    try {
        const todo_id = req.params.id;
        const { title, description } = req.body;
        let result = await model.Todo.update({
            title: title,
            description: description
        }, {
                where: {
                    id: todo_id
                }
            })
            if (result) {
                res.status(200).send('Update note success')
            } else {
                res.status(404).send('Update note faile')
            }
    } catch (e) {
        console.log(e)
    }
});

//delete todo
/* Delete todo. */
router.delete('/:id', function (req, res, next) {
    const todo_id = req.params.id;
    model.Todo.destroy({ where: {
        id: todo_id
    }})
        .then(status => res.json({
            error: false,
            message: 'todo has been delete.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

//async - await
router.delete('/:id', async (req, res, next) => {
    try {
        const todo_id = req.params.id;
        let result = await model.Todo.destroy({
            where: {
                id: todo_id
            }
        })
        if (result) {
            res.status(200).send('Delete note success')
        } else {
            res.status(404).send('Delete note faile')
        }
    } catch (e) {
        console.log(e)
    }
});