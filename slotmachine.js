const prompt=require("prompt-sync")();

const ROWS=3;
const COL=3;

 
const SYMBOLS={
    "A":2,
    "B":4,
    "C":6,
    "D":7
}
const symbol_values={
    "A":5,
    "B":4,
    "C":3,
    "D":2,
}

const deposit=()=>{
    while (true){
        const inputdeposit= prompt("Enter The amount you want to deposit.. ")
        const numberinputdeposit=parseFloat(inputdeposit)
    
    
        if ((isNaN(numberinputdeposit)) || (numberinputdeposit<0)){
            console.log("This is an invalid number try again...")
            }
    
        else{
            return numberinputdeposit
            
        }
    }
}


const get_bet=(balance,numberoflines)=>{
    while(true){
    BETAMOUNT=prompt("Enter the amount you want to bet per line: ")
    let numberbetamount=parseFloat(BETAMOUNT)

    if ((isNaN(numberbetamount)) || (numberbetamount<0) || ( numberbetamount > balance / numberoflines)){
        console.log("Enter a valid bet amount...")
        }
    else{
        return numberbetamount
    }
}
}

const bet_lines=()=>{
    while (true){
        const lines= prompt("Enter The number of lines you want to bet on(1-3)" )
        const numberoflines=parseFloat(lines)
    
        if ((isNaN(numberoflines)) || (numberoflines<0) ||(numberoflines>3)){
            console.log("INVALID NUMBER OF LINES TRY AGAIN...")
        }
        else{
            return numberoflines
        }
    
}
}
const spin=()=>{
    const symbols=[]
    for (const [symbol,count] of Object.entries(SYMBOLS)){
        for(let i=0 ; i<count ; i++ ){
            symbols.push(symbol)
        }
    }
    const reels=[]
    for (let i=0;i<COL;i++){
        const reelsymbols=[...symbols]
        const jeels=[]
        for(let j=0;j<ROWS;j++){
            random_index=(Math.floor(Math.random()*reelsymbols.length))
            selectedsymbol=reelsymbols[random_index]
            jeels.push(selectedsymbol)
            reelsymbols.splice(random_index,1)  
        }
        reels.push(jeels)
        
    }
    return reels

}
const transpose=(reels)=>{
    let real_rows=[]
    for(let i=0;i<ROWS;i++){
        real_rows.push([])
        for(let j=0;j<ROWS;j++){
            real_rows[i].push(reels[j][i])
        }
    }
    return real_rows
};

const print_ROWS=(real_rows)=>{
    for(const row of real_rows){
       let ROWString=" "
       for(const[i,symbol] of row.entries()){
            ROWString+=symbol;
            if (i!=row.length-1 ){
                ROWString+=" | "
            }

       }
       console.log(ROWString)
        
    }
} 
const getwinnings=(real_rows,bet,lines)=>{
    let winnings=0
    for (let i=0 ;i<lines; i++){
        let symbols=real_rows[i]
        let allsame=true
        for (const symbol of symbols){
            if (symbol !=symbols[0]){
                allsame=false
                break
            }
        }
        if(allsame){
            winnings+=bet*symbol_values[symbols[0]]
        }
    }
    return winnings

} 
balance=deposit()
const play=()=>{
console.log("You betted on",lines," lines ")
console.log("You betted $ ",bet_per_line,"  per line")
balance-=(bet_per_line*lines)
print_ROWS(real_rows)
console.log("The real winning you made are $",winnings)
balance+=winnings
console.log("Total balance is $" , balance);
let ask=prompt("Would you like to play again? (y or n): ").toLowerCase()
if (ask=="y"){
    main()
}
}
const main=()=>{
    lines=bet_lines()
    bet_per_line=get_bet(balance,lines)
    reels=spin()
    real_rows=transpose(reels)
    winnings=getwinnings(real_rows,bet_per_line,lines)
    play()
}
main()
console.log("Your current balance is $",balance)
