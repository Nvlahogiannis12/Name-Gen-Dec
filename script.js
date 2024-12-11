


//Generating prefix of name
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'The Great'
    }
    else {
        return 'Master'
    }
}
//gen name with randomizer
//Generate First Name of Name
function genFirstName(firstName){
   const firstLetter = firstName.charAt(0).toLowerCase()
   if (firstLetter === 'a'){
    return 'Jeff'
   } else if (firstLetter === 'b'){
return 'Gary'
   }
   else if (firstLetter === 'c'){
return 'Barry'
   }
   else if (firstLetter === 'd'){
return 'Mary'
   }
   else {
return 'Harry'
   }
}

//Generate middle name
function genMiddleName (roadType, favoriteColor){
    if (roadType === 'road'){
        return `${favoriteColor}ridge`
    } else if (roadType === 'street') {
        return `${favoriteColor}valley`
    } else if (roadType === 'ave') {
        return `${favoriteColor}woods`
    } else{
        return `${favoriteColor}rock`
    }
}

//gen last name
function genLastName(lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
    if (lastLetter === 'a'){
        return 'Shadow'
    } else if (lastLetter === 'e'){
        return 'Storm'
    } else{
        return 'Blaze'
    }
}

//last suffix
function genSuffix (favoriteAnimal){
    return`of the ${favoriteAnimal}`
}

// Master Function to assemble words
function genFullName (){
    //define variables from input
    const firstName = document.getElementById('firstName').Value.trim()
    const lastName = document.getElementById('lastName').Value.trim()
    const roadType = document.getElementById('roadType').Value
    const favoriteColor = document.getElementById('favoriteColor').Value.trim()
    const animal = document.getElementById('animal').Value.trim()

    //generate each name part w help function
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(animal)

    

}