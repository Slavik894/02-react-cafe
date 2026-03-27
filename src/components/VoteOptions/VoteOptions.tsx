import css from "./VoteOptions.module.css"


interface VoteOptionsProps{
    onVote: React.MouseEvent<HTMLButtonElement>;
    onReset: React.MouseEvent<HTMLButtonElement>;
    canReset: boolean;
}

export default function VoteOptions(){
    return(
<div className={css.container}>
  <button className={css.button}>Good</button>
  <button className={css.button}>Neutral</button>
  <button className={css.button}>Bad</button>
  <button className={`${css.button} ${css.reset}`}>Reset</button>
</div>
)
}