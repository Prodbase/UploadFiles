// 7 - importando configurações do multer
// 11 - Implementando multer à rotae função single(Um arquivo por vez) 

import express from 'express'
const router = express.Router()

import multer from 'multer'
import multerConfig from '../config/multer'
import controller from '../controller/controller'

router.post('/upload', multer(multerConfig).single('file'), controller.create)

export default router
