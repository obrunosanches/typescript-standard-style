import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'

import Category from 'models/Category'

const categoriesRoutes = Router()

const categories: Category[] = []

categoriesRoutes.get('/', (_, res) => {
  return res.json({ data: categories })
})

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body
  const category: Category = {
    id: uuidV4(),
    name,
    description,
    created_at: new Date(),
  }

  categories.push(category)

  return res.status(201).send()
})

export { categoriesRoutes }
