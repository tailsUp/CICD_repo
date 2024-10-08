const blogsRouter = require('express').Router()
const middleware = require('../utils/middleware')
const jwt = require('jsonwebtoken')
const Blogs = require('../models/blogs')

/**
 * Funktio palauttaa tietokannan kaiken sisällön JSON olioina.
 */
blogsRouter.get('/', async (request, response) => {
  //const blogs = await Blogs.find({})
  console.log('GET ALL BLOG POSTS')
  const blogs = await Blogs.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})

/**
 * Funktio palauttaa yksittäisen olion tietokannasta, jos sellaisen löytää.
 */
blogsRouter.get('/:id', async (request, response) => {
  const blogs = await Blogs.findById(request.params.id).populate('user', { username: 1, name: 1 })
  if (blogs)
  {
    response.json(blogs)
  }
  else
  {
    response.status(404).json(blogs)
  }
})

/**
 * Funktio lisää olion tietokantaan.
 */
blogsRouter.post('/', async (request, response, next) => {
  const body = request.body
  request = await middleware.userExtractor(request, response, next)
  request = await middleware.tokenExtractor(request, response, next)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!decodedToken.id)
  {
    return response.status(401).json({ error: 'token invalid' })
  }

  //const user = await Users.findById(body.userId)
  if (request.user)
  {
    let user = undefined
    if(Array.isArray(request.user))
    {
      user = request.user[0]
    }
    else
    {
      user = request.user
    }
    const blogs = new Blogs({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id
    })

    const savedBlog = await blogs.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.status(201).json(savedBlog)
  }

})

/**
 * Funktio poistaa tietokannasta olion, jos authorization token on ok. Jos authorization token puuttuu niin ilmoitetaan väärästä tokenista.
 * (Viikko 4 tehtävä 4.21)
 */
blogsRouter.delete('/:id', async (request, response) => {
  const deleteID = request.params.id
  request = middleware.tokenExtractor(request, response)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!decodedToken.id)
  {
    return response.status(401).json({ error: 'token invalid - NOTHING was deleted' })
  }
  else
  {
    await Blogs.findByIdAndRemove(deleteID)
    response.status(204).end()
    return response.status()
  }
})

/**
 * Funtkio päivittää olemassaolevan olion tietokannassa.
 */
blogsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const blogs = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }

  Blogs.findByIdAndUpdate(request.params.id, blogs, { new: true })
    .then(updatedBlogs => {
      response.json(updatedBlogs)
    })
    .catch(error => next(error))
})

module.exports = blogsRouter