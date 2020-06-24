# Whiling Away

### Setup

For this exercise, we don't need to run tests. There arent' any! We will only use the command 
`node main.js` in the terminal, and see what gets printed out. 


### Challenge Banner Challenge

Write a function that, given a number, prints a string in the following format, with `n` replaced by the given number:

######### Challenge n #########

Call this function BEFORE EVERY SINGLE challenge number below, giving it the challenge number you're currently on. So, for the first challenge, you'll give the function `1` and see `######### Challenge 1 #########` printed, and for the second, you'll give the function `2` and see `######### Challenge 2 #########` printed. This will give you a nice banner in your terminal to separate each challenge's results.


### Numbered Challenges

1. Write a function that prints the numbers from 1 to 5. Note that, since we're hard-coding our starting point (1) and our end point (5), no parameters are required! Now call it and observe your terminal. You should see 1 on the first line, then 2 on the second, and so on.
2. **Did you remember to call your challenge banner printing function?** Call it before this next challenge, and go back and call it before the first one if you didn't already. Now! Write a function that prints the numbers from `1` to whatever number is passed in as a parameter. Call your function with 6 as the parameter.
3. Write a function that takes in two parameters and prints the numbers from the first to the second, INCLUSIVE.
4. Write a function that prints the numbers from 1 to the number given, and then "Odd" if it's an odd number and "Even" if it's an even number, going through each number from 1 to whatever is passed in. Print that pair of things on one line or two--up to you! Call it with 5, and you should get something like:

1 Odd

2 Even

3 Odd

4 Even

5 Odd

Or, if you did it on two lines:

1

Odd

2

Even

3

Odd

4

Even

5

Odd

5. Print the even numbers ONLY from 1 to whatever number is passed in (inclusive). Call it with 11, and make sure you're getting 2, 4, 6, 8, and 10 printed out!
6. Write a function that prints the numbers from 10 to 1, in descending order. Now call it!
7. Write a function that prints the numbers from 10 to 1, in descending order, followed by "Blast off!". Now call it!
8. Write a function that prints the numbers from the parameter given down to 1, in descending order, counting by 3s. Then call it with 20. You should see 20, 17, 14, 11, and so on. Do not print 1 or anything below it. Now call it!


### String Challenges

9. Write a function that prints "Hello!" seven times, each time PRECEDED by the number we're on, a period, and a space. That is, if we're on number 5, we should print: "5. Hello!" Note that, since we're hard-coding everything, no parameters are required. Now call it and observe your console. Count 'em up and make sure there are 7 printings!
10. Write a function that prints in the same format as above, and also 7 times, but with a string passed in instead of a hard-coded "Hello!". Call it with the string of your choosing. You should see the same results as the previous challenge, but with the string you pass in instead of "Hello!".
11. Write a function that takes in a string and a number and prints that string that number of times. Now call it with the parameters of "Good-bye..." and `4`, and then "Get out!" and `6`. You should see "Good-bye..." printed 4 times, followed by "Get out!" 6 times.
12. Write a function that takes in a string and prints every character individually of that string. Then call it with "think". You should see the "t" printed on one line, then the "h" on the next line, and so on.
13. Write a function that prints every OTHER character of its string parameter individually. Call it with "Nobody", and make sure you're printing "o", followed by "o", followed by "y".
14. Write a function that prints a string's individual characters backwards. Use a loop for this, NOT `.join`. Call it with 'Mesuara' and make sure it prints 'a' and then 'r' and then 'a' and then 'u' and… you get the idea.


### Challenge Challenges

15. FizzBuzz! Write a function that takes in a number and prints EACH integer from 1 to that number, inclusive. If the number is divisible by 3, print "Fizz" instead of the number. If it's divisible by 5, print "Buzz" instead of the number. If it's divisible by both, print "FizzBuzz". Now call it with 15 and check the output.
16. Fibonacci! Write a function that takes in a number and prints each Fibonacci number (starting with 1 and 1) from 1 to that number, inclusive.
