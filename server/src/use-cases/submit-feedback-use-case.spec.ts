import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const SendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: SendMailSpy }
)

describe('Submit feedback', () => {

    it('should be able to submit a feedback', async () =>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screnshot: 'data:image/png;base64,87gsd87sda98dh978'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(SendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type ', async () =>{
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screnshot: 'data:image/png;base64,87gsd87sda98dh978',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment ', async () =>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screnshot: 'data:image/png;base64,87gsd87sda98dh978',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with an invalid screnshot ', async () =>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'ta tudo bugado',
            screnshot: 'test.jpg',
        })).rejects.toThrow();
    });

});