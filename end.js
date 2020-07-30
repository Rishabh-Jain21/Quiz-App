const username=document.getElementById("username");
const saveScoreBtn=document.getElementById("saveScoreBtn");
const finalScore=document.getElementById('finalScore');
const highScores=JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
const MAX_HIGH_SCORE=5;
const mostRecenetScore=localStorage.getItem('mostRecentScore');
finalScore.innerText=mostRecenetScore;
username.addEventListener("keyup",function()
{
    saveScoreBtn.disabled=!username.value;
})

saveHighScore = e => {
    e.preventDefault(); 
    const score = {
        score:mostRecenetScore,
        name:username.value
    };

    highScores.push(score);
    highScores.sort((a,b) => b.score-a.score);
    highScores.splice(5);
    console.log(highScores);
    localStorage.setItem('highScores',JSON.stringify(highScores));
    window.location.assign('index.html')
};