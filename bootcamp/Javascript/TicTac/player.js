

const Player = (name,symbol,number) => {
    const setName = (value) => name = value;
    const getName = () => name;
    const getSymbol = () => symbol;
    const getNumber = () => number;
    

    return {setName,getName,getSymbol,getNumber};
}

const player1 = Player("caine","Z",1);
