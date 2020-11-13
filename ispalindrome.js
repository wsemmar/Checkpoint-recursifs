function isPalindrome(mot){
    let len = mot.length
     if (mot[0] !== mot[len-1]){
         return(false)
     }
     if (len <= 1){
        return (true)
     }
     else{
     isPalindrome(mot.slice (1 ,-1))   
     }
 }