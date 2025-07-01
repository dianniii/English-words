import { useContext } from "react"
import { ContextWords } from "../../const"

export const useWordsContext = () =>{
    const context = useContext(ContextWords);
    if(!context){
        throw new Error ('useWordsContext должен использоваться в рамках ContextWordsProvider');
    }
    return context;
};