import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import type Votes from '../../types/votes';
import type { VoteType } from '../../types/votes';
import VoteOptions from '../VoteOptions/VoteOptions';


export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
});

  function handleVoteType(type: VoteType){
    
  };
  function resetVotes(){};


  return(
    <div className={css.app}>
    <CafeInfo />
    <VoteOptions />
  </div>
  )
  


}
