# Drop While

### Problem

https://www.greatfrontend.com/questions/javascript/drop-while

#

### Problem Description

Implement a function `dropWhile(array, predicate)` that creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

### Arguments

1. `array` (Array): The array to query.
2. `predicate` (Function): The function invoked per iteration. The function is invoked with three arguments: (value, index, array).

### Returns
(Array): Returns the slice of array.


```
dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
dropWhile([1, 2, 3], (value) => value < 6); // => []

```
Note that Lodash's dropWhile utility also allows you to pass an optional thisArg parameter to bind this inside the predicate function, but for this exercise, you can ignore that parameter.

#

### Solution

[Drop While](./dropWhile.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
