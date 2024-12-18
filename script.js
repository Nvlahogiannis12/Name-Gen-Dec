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
   if (firstLetter === 'a' || firstLetter === 'v'){
    return 'Aureliontharixian'
   } else if (firstLetter === 'j' || firstLetter ==='t'){
return 'Vorthanyxthilavor'
   }
   else if (firstLetter === 'c' || firstLetter ==='h'){
return 'Nyxandralithyra'
   }
   else if (firstLetter === 'm' || firstLetter ==='p'){
return 'Zephyrokathandris'
   }
    else if (firstLetter === 'l' || firstLetter ==='k'){
return 'Thaloryxandralion'
    }
    else if (firstLetter === 'e' || firstLetter ==='n'){
return 'Myrrhanoktalysse'
    }
    else if (firstLetter === 's' || firstLetter ==='w'){
return 'Kalyndoraxithralon'
    }
    else if (firstLetter === 'b' || firstLetter ==='g'){
return 'Fyrnelythandrios'
    }
    else if (firstLetter === 'r' || firstLetter ==='r'){
return 'Xytheronaxdrimor'
    }
    else if (firstLetter === 'd' || firstLetter ==='f'){
return 'Drakthalyssorvenis'
    }
   else {
return 'Zorynthalvyrexian'
   }
}

//Generate middle name
function genMiddleName (roadType, favoriteColor){
    if (roadType === 'road'){
        return `${favoriteColor}-bringer`
    } else if (roadType === 'street') {
        return `${favoriteColor}-crashed`
    } else if (roadType === 'ave') {
        return `${favoriteColor}-spirit`
    } else{
        return `${favoriteColor}-scarred`
    }
}

//gen last name
function genLastName(lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
    if (lastLetter === 'a'){
        return 'Menace'
    } else if (lastLetter === 'e'){
        return 'Destroyer'
    } else if (lastLetter === 'i'){
    return 'Terrorizer'
    }else{
        return 'Scourge'
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

