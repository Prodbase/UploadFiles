import { Request, Response } from 'express'
import fs from 'fs'
import { Template } from '../models/Template'

class Controller {
    public async create(req: Request, res: Response) {
        try {
            const file = req.file
            const base64_encode = (file: any) => {
                return "data:image/png;base64,"+fs.readFileSync(file, 'base64');
            }
            const base64 = base64_encode(file?.path)

            const categoryToArray = req.body.category.split(',')
                .map((category: string) => category.trim())

            await Template.create({
                name: req.body.name,
                image: base64,
                url: req.body.url,
                category: categoryToArray
            })

            return res.status(200).send({ success: true })

        } catch (error) {
            return res.status(400).send({ error })
        }
    }

    public async find(req: Request, res: Response) {
        try {
            const templates = await Template.find()
            return res.send(templates)
        } catch (error) {
            return res.status(400).send({ error })
        }
    }

    public async filter(req: Request, res: Response) {
        try {
            const query = String(req.query.category).toLocaleLowerCase()
            const templates = await Template.find({ category: { $in: [query] } })
            return res.send(templates)
        } catch (error) {
            return res.status(400).send({ error })
        }
    }
}


export default new Controller()
