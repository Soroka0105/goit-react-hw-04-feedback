import React, { useState } from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";




export const Feedback = () => {
  
      const [good, setgood] = useState(0)
     const [bad, setbad] = useState(0)
      const [neutral, setneutral] = useState(0)

  const options = Object.keys({
    good,
    bad,
    neutral,
  }) 
      
      const HandleFeedback = evt =>{
      const name = evt.target.id
      switch (name) {
        case 'good':
            setgood(good+1)
            break;
      case 'bad':
        setbad(bad+1)
        break;
        case 'neutral':
            setneutral(neutral+1)
            break;
        default:
            break;
      }

    };
    

            const countTotalFeedback = (a, b, c) => {
                let total = a + b + c
               return total
            }
            const countPositiveFeedbackPercentage = (a, b, c) => {
                let percentage = a / (a+b+c) * 100
                return percentage.toFixed()
               
            }
            
            
    
return(
    <div>
    <Section title = "Leave a feedback">
    <FeedbackOptions options = {options} onLeaveFeedback = {HandleFeedback} />
    </Section>
        <Section title = 'Statistics'>
        <Statistics 
good ={good} 
neutral = {neutral} 
bad = {bad} 
total = {countTotalFeedback(good,neutral, bad ) } 
percentage = {countPositiveFeedbackPercentage(good, bad, neutral)}
notificationMessage = "There is no feedback" />
        </Section>
</div>
) 
    
}