import { Request, Response } from 'express'

class Controller {
    public async create (req: Request, res: Response) {
        try {
            return res.status(200).send(req.file)
        } catch (error) {
            return res.status(400).send({ error })
        }
    }
}


export default new Controller()
