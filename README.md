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

Test: "It should return an array that counts up to the user's inputted value, and if one of the values of the array element is equal to 1, it will change that value to 'Beep!'. If one of the values is equal to 2, it will change that value to 'Boop!'. If one of the values is 3, it will change the value to 'Won't you be my neighbor?'." If the value is greater than 10, and includes the digit 1, it will change the value to 'Beep!'. Enless the value also contains a 2 as one of the other digits, then that value will be changed to 'Boop!'."
Code: beepBoop(12);
Expected Output: [0,'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!']

