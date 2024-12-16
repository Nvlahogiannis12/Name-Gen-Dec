//Generating prefix of name
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'The Great'
    }
    else {
        return 'Master'
    }
}
//Generate First Name of Name
function genFirstName(firstName){
   const firstLetter = firstName.charAt(0).toLowerCase()
   if (firstLetter === 'a'){
    return 'Aureliontharixian'
   } else if (firstLetter === 'j'){
return 'Vorthanyxthilavor'
   }
   else if (firstLetter === 'c'){
return 'Nyxandralithyra'
   }
   else if (firstLetter === 'm'){
return 'Zephyrokathandris'
   }
    else if (firstLetter === 'l'){
return 'Thaloryxandralion'
    }
    else if (firstLetter === 'e'){
return 'Myrrhanoktalysse'
    }
    else if (firstLetter === 's'){
return 'Kalyndoraxithralon'
    }
    else if (firstLetter === 'b'){
return 'Fyrnelythandrios'
    }
    else if (firstLetter === 'r'){
return 'Xytheronaxdrimor'
    }
    else if (firstLetter === 'd'){
return 'Drakthalyssorvenis'
    }
   else {
return 'Zorynthalvyrexian'
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
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const animal = document.getElementById('animal').value.trim()

    //generate each name part w help function
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(animal)

    //functions to captialize words
    const capitalizedPrefix = toCapitalize(prefix)
    const capitalizedFirstName = toCapitalize(newFirstName)
    const capitalizedMiddleName = toCapitalize(middleName)
    const capitalizedLastName = toCapitalize(newLastName)

    //Name Generated Words
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`

    document.getElementById('result').textContent = fullName
}
//capitalizer
function toCapitalize(word)
{
return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

