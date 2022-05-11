import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg"
import thoughtImageUrl from  "../../assets/ideia.svg"
import ideaImageUrl from  "../../assets/thougth.svg"
import { FeedbacktypeStep } from "./Steps/FeedbacktypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes ={
  BUG:{
     title:'Problema',
     image:{
       source: bugImageUrl,
       alt:'Imagem de um inseto'
     }
  },
  IDEA:{
    title:'Ideia',
    image:{
      source: thoughtImageUrl,
      alt:'Imagem de uma lâmpada'
    }
  },
  OTHER:{
    title:'Outro',
    image:{
      source: ideaImageUrl,
      alt:'Imagem de um Balão de pensamentos'
    }
  }
}

export type Feedbacktype = keyof typeof feedbackTypes;

export function WidgetForm() {
  
  const [feedbacktype, setFeedbackType] = useState<Feedbacktype | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback(){
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto' >
     
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbacktype?(
            <FeedbacktypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep 
              feedbackType={feedbacktype}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() =>setFeedbackSent(true) }
          />
        )}
        </>
      )}

        <footer className='text-xs text-neutral-400' >
            Agradecemos pela visita ❤  
        </footer>
    </div>
  )
}

