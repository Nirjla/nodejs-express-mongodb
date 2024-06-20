import e from "express"
import tutorialRouter from "./tutorial.routes.mjs"
const router = e.Router()
router.use("/tutorials",tutorialRouter)

export default router