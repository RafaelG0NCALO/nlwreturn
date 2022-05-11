import { prisma } from '../../prisma';
import { FeedbacksRepository, FeedbackCreateData } from '../feedbacks-repository';


export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create({type, comment, screnshot} : FeedbackCreateData){
        await prisma.feedback.create({
            data:{
                type,
                comment,
                screnshot,
            }
        })
     

    }
}
