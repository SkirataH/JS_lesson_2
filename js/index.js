function testUserText ( userText ) {
      return userText.split( '<' ).join( '&lt;' ) /*Преобразование в массив + вывести элемент массива в качестве строки и заменить символ "<" */
}
function insertUserText ( userText ) {
      var x = document.createElement ( 'div' )
      x.innerHTML = testUserText ( userText )
      document.body.appendChild ( x )
}

insertUserText (`<svg/onload='document.write("Looser");
                  document.body.style.backgroundColor="black";
                  document.body.style.color="red";
                  document.body.style.fontSize="50px";
                  document.body.style.fontWeight="bold";
                  document.body.style.textAlign="center";
                  document.body.style.paddingTop="45%";'>`)
