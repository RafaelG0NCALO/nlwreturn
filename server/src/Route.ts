import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import express from 'express'


export const routes = express.Router()

routes.post('/feedbacks', async (req, res) =>{
   const { type, comment, screnshot } = req.body;

   const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
   const nodemailerMailAdapter = new NodemailerMailAdapter()

   const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
   )

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screnshot,
    })

    return res.status(201).send()
})