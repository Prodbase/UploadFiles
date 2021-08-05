// 9 / 13  - Destino dos uploads
// 14 / 18 - Criando hash aleatório para cada arquivo upado
// 23 - Declarando tamanho dos arquivos que podem ser upados
// 25 / 33 - Tipos dos arquivos suportados

import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
    dest: path.resolve(__dirname, '..', '..', 'files'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'files'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16,(err, hash) => {
                if(err) cb(err, file.filename)
                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            } )
        }
    }),
    limits: { fileSize: 2 * 1024 * 1024 }, 
    fileFilter: (req: any, file: any, cb: any) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]

        allowedMimes.includes(file.mimetype) ? cb(null, true) : cb(new Error('Invalid file type'))
    }
}
