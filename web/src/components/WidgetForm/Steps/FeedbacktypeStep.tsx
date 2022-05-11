import { Feedbacktype, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

export interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: Feedbacktype) => void
}

export function FeedbacktypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return (
    <>
    <header>
        <span className='text-xl leading-6' >Deixe seu feedback</span>
        <CloseButton/>
    </header>


    <div className="flex py-8 gap-2 w-full">
    { Object.entries(feedbackTypes).map(([key, value]) => {   
      return(
        <button
          key={key} //propriedade para sabe identificar unicamente cada botao na interface
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          onClick={() => onFeedbackTypeChanged(key as Feedbacktype)}
          type="button"
        >
          <img src={value.image.source} alt={value.image.alt} />
          <span>{value.title}</span>
        </button>
          );
      }) }
  </div>
  </>
  )
}

