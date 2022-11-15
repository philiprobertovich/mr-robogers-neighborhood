# Mr. Roboger's Neighborhood

### By Philip Kendall

#### This webpage takes a user's inputted number and creates and manipulates the array to various degrees, mostly affecting integers that contain a digit of 3, 2, or 1.

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* Git

## Description

Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(10);
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Test: "It should return an array that counts up to the user's inputted value, and if one of the values of the array element is equal to 1, it will change that value to 'Beep!'."
Code: beepBoop(1);
Expected Output: [0,'Beep!'] 

Test: "It should return an array that counts up to the user's inputted value, and if one of the values of the array element is equal to 1, it will change that value to 'Beep!'. If one of the values is equal to 2, it will change that value to 'Boop!'."
Code: beepBoop(2);
Expected Output: [0,'Beep!', 'Boop!']

Test: "It should return an array that counts up to the user's inputted value, and if one of the values of the array element is equal to 1, it will change that value to 'Beep!'. If one of the values is equal to 2, it will change that value to 'Boop!'. If one of the values is 3, it will change the value to 'Won't you be my neighbor?'."
Code: beepBoop(3);
Expected Output: [0,'Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: "It should return an array that counts up to the user's inputted value, and if one of the values of the array element is equal to 1, it will change that value to 'Beep!'. If one of the values is equal to 2, it will change that value to 'Boop!'. If one of the values is 3, it will change the value to 'Won't you be my neighbor?'."
Code: beepBoop(9);
Expected Output: [0,'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9]

Test: "It should return an array that counts up to the user's inputted value, and if one of the values of the array element is equal to 1, it will change that value to 'Beep!'. If one of the values is equal to 2, it will change that value to 'Boop!'. If one of the values is 3, it will change the value to 'Won't you be my neighbor?'." If the value is greater than 10, and includes the digit one, it will change the value to 'Boop!'.
Code: beepBoop(11);
Expected Output: [0,'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!']

Test: "It should return an array that counts up to the user's inputted value, and if one of the values of the array element is equal to 1, it will change that value to 'Beep!'. If one of the values is equal to 2, it will change that value to 'Boop!'. If one of the values is 3, it will change the value to 'Won't you be my neighbor?'." If the value is greater than 10, and includes the digit one, it will change the value to 'Boop!'.
Code: beepBoop(11);
Expected Output: [0,'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!']

Test: "It should return an array that counts up to the user's inputted value, and if one of the values of the array element is equal to 1, it will change that value to 'Beep!'. If one of the values is equal to 2, it will change that value to 'Boop!'. If one of the values is 3, it will change the value to 'Won't you be my neighbor?'." If the value is greater than 10, and includes the digit 1, it will change the value to 'Beep!'. Unless the value also contains a 2 as one of the other digits, then that value will be changed to 'Boop!'."
Code: beepBoop(12);
Expected Output: [0,'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!']

Test: "It should complete all of the tasks listed above, as well as if a value contains digits that include a 1 and 3, then the 3 will gain priority, and 'Won't you be my neighbor?' will replace that current value.
Code: beepBoop(13);
Expected Output [0,'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!','Won't you be my neighbor?']

Test: "It should complete all of the tasks listed above, as well as if a value contains a 1, and 2 digit only, then "Boop!" will become the replacement for that value. If the value contains a 1, or 2 and a 3 as one of the digits, then 'Won't you be my neighbor?' will the become the replacement of the value.
Code: beepBoop(23); 
Expected Output: [0,'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!','Won't you be my neighbor?', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor?']

## Setup/Installation Requirements

* Fork over the the repository to your own Github account.
* Clone your Github repo down to your local machine and into the directory you would like this project to be stored.
* Navigate to the index.html file and open it in your browser.
* After that, the application should be able to run.

## Known Bugs

N/A

## License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The below copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2022 Philip Kendall