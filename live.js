var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Shakhupura', 'Kashmir']

function printAllCities() {

    document.getElementById('output').innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById('output').innerHTML += num + ')' + cities[i] + '<br>'
    }
}
function addCity() {
    let city = document.getElementById("inputText").value
    if (city === "") {
        alert('Please Enter Your City Name')
        return
    }
    cities.push(city)
    document.getElementById('output').innerHTML = '<span style= " colour : green; font-size: 20px;">"' + city + '"has been successfully added into list. </sspan> '

}
var originalText = "I love my country Pakistan.<br>I like my city Faisalabad.<br>I love my Homeland."

function toUpperCase() {

    let toUpperCaseText = originalText.toUpperCase()
    document.getElementById('output').innerHTML = toUpperCaseText

}
function toLowerCase() {

    let toLowerCaseText = originalText.toLowerCase()
    document.getElementById('output').innerHTML = toLowerCaseText

}

function toCapitalize() {

    let CapitalizeText = '<span style="text-transform: Capitalize;">' + originalText + '</span>'
    document.getElementById('output').innerHTML = CapitalizeText
}

function toBetterFormatting() {

    let text = document.getElementById('inputText').value
    text = text.toLowerCase()
    if (text === "") {

        alert('Please Enter Your Text')
        return
    }
    document.getElementById('output').style.textTransform = 'Capitalize'
    document.getElementById('output').innerHTML = text


}

function replaceThisWord(){

    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById('inputText').value
    if(!word){
        alert('Please Enter Your Text')
        return
    }
    let replaceWith = prompt('Enter A Word Which You Want TO Replace')
    if(!replaceWith){
        alert('Please type a word to replace with' + word + "")
        return
    }
    word = word.toLowerCase()
    word = new RegExp(word,'g')
    replaceWith = replaceWith.toLowerCase()
    let replaceThisWord = newOriginalText.replace(word,replaceWith)
    document.getElementById('output').innerHTML = replaceThisWord

}
function findThisWord(){

    let newOriginalText = originalText.toLowerCase()
    let word = document.getElementById('inputText').value
    if(!word){
        alert('Please Enter Your Text')
        return
    }
    word = word.toLowerCase()
    let findThisWord = newOriginalText.indexOf(word)
    if(findThisWord !== -1){

        let html = '<span style="colour: green; font-size: 18px">"' + word + '"</span> found at index' + findThisWord;
    }else{
        let html = '<span style="colour: green; font-size: 18px">"' + word + '"Doesnot exsit in the Original String';
        document.getElementById('output').innerHTML = findThisWord
    }


}

