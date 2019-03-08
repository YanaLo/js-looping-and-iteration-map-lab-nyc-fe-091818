// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map((driver)=>{
    return driver.toLowerCase()
  })
}

function nameToAttributes(array){
  return array.map(driver=>{
  let firstDriver=driver.split(' ')[0]
  let lastDriver=driver.split(' ')[1]
  return {firstName:firstDriver, lastName:lastDriver}
})
}

function attributesToPhrase(object){
  return object.map()
  
}