

/*
 * Complete the 'searchSuggestions' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY repository
 *  2. STRING customerQuery
 */

//when input is at least 2 characters, compare to repo.
//return only three matches in alphabetical order
//continue searching with more characters input
const repo = ['baggage', 'cloth', 'bar', 'barrage', 'bad', 'bag'] 
const custom = 'bag'
function searchSuggestions(repository, customerQuery) {
    if(!(customerQuery.length > 1)) return null;
    let fitsList = []
    let tempList = repository
    let len = customerQuery.length
    for(let i=0; i<len; i++){
        fitsList = tempList.filter((word) => {
            word[i] === customerQuery[i]})
        tempList = fitsList
    } 
    //tempList = fitsList
    return fitsList.slice[0, 3]
    }


    for(const c of repo[0]){
        if(c === customerQuery){
            return c
        }
    }
    
       
    
    

   

console.log(searchSuggestions(repo, custom))