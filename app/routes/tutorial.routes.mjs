import e from "express"
import { create, findAll } from "../controllers/tutorial.controller.mjs"
const router = e.Router()
router.get('/',findAll )
router.post('/', create)

export default router