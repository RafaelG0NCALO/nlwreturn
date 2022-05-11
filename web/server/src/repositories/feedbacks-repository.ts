export interface FeedbackCreateData{
    type: string;
    comment:string;
    screnshot?: string;
}

export interface FeedbacksRepository{
    create: (data: FeedbackCreateData) => Promise<void>;
}