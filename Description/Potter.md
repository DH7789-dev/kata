Once upon a time, there was a series of 5 books about a very English hero called Harry. (At least when this Kata was invented, there were only 5. Since then they have multiplied). 
Children all over the world thought he was fantastic, and, of course, so did the publisher.  
So in a gesture of immense generosity to mankind (and to increase sales), they set up the following pricing model to take advantage of Harry’s magical powers.  

One copy of any of the five books costs 8 EUR.  
If, however, you buy two different books from the series, you get a 5% discount on those two books.  
If you buy 3 different books, you get a 10% discount.  
With 4 different books, you get a 20% discount.  
If you go the whole hog and buy all 5, you get a huge 25% discount.

Note that if you buy, say, 4 books, of which 3 are different titles, you get a 10% discount on the 3 that are different, but the 4th book still costs 8 EUR.

Potter mania is sweeping the country and parents of teenagers everywhere are queueing up with shopping baskets overflowing with Potter books.  
Your mission is to write a piece of code to calculate the price of any conceivable shopping basket, giving as big a discount as possible.

First, you need to setup a project quickly so we can write unit tests. Create a function called getPrice and make it available in your tests. The function will take an array as parameter:

```js
getPrice([1]) // get the price for one book
getPrice([1, 3, 4, 4]) // get the price for 4 books (one copy of the first book, one copy of the third, and two of the fourth)
```
We expect:  
[] => 0  
[1] => 8  
[1, 1, 1, 1, 1] => 40  
[1, 2] => 15.2   
[1, 2, 3] => 21.6   
[1, 2, 3, 4] => 25.6   
[1, 2, 3, 4, 5] => 30   
[1, 1, 2] => 23.2 (= 15.2 + 8)  
[1, 2, 1, 2] => 30.4 (= 15.2 * 2)    

Your job is to follow this pattern:
Write the simplest test case you can think of
Show us that the test is red
Implement the minimal set of code to make all tests green
If you want to refactor here, you can. But only when all tests are green!