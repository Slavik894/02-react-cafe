import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import type Votes from '../../types/votes';
import type { VoteType } from '../../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';


export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
});

 function handleVoteType(type: VoteType){
    setVotes((oldVotes)=>({
       ...oldVotes,
      [type]: oldVotes[type]+1
    }))};
    
  function resetVotes(){
    setVotes({good: 0, neutral: 0, bad: 0})
  };


  return(
    <div className={css.app}>
    <CafeInfo />
    <VoteOptions onVote={handleVoteType} onReset={resetVotes} canReset={true}/>
    <VoteStats/>
  </div>
  )
  


}
