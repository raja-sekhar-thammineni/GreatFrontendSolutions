# jQuery.css

### Problem

https://www.greatfrontend.com/questions/javascript/jquery-css

#

### Problem Description

In Vanilla JavaScript, the way to set styles on an element would be as follows:

```
const buttonEl = document.querySelector('button');
buttonEl.style.color = 'red';
buttonEl.style.backgroundColor = 'tomato';
buttonEl.style.fontSize = '16px';

```
`jQuery` is a library that simplifies DOM manipulation (among other things). With jQuery (using the $ alias function), the above can be simplified into:

```
const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');

```
The return value of most jQuery manipulation APIs return the jQuery object itself, so that method calls can be chained. The above can be further simplified again:

```
$('button')
  .css('color', 'red')
  .css('backgroundColor', 'tomato')
  .css('fontSize', '16px');

```

Additionally, if the second parameter is omitted, the value of that style property is returned.

```

// <button style="color: red">Submit</button>
$('button').css('color'); // 'red'

```

Implement the jQuery single-character function $ which only needs to supports the css() method that either gets the value of a computed style property or sets a CSS property on the matched element.


#

### Solution

[jQuery.css](./jqueryCss.js)

#

<p align="center">
	<a href="https://github.com/ghoshsuman845" alt="Github" title="github">
       <img src="https://img.shields.io/badge/Followe_Me_For_More_Useful_Repos-15k?style=for-the-badge&color=2088FF&logo=github&logoColor=fff"/>
    </a>
    <a href="https://github.com/ghoshsuman845/ghoshsuman845" alt="Github Stars" title="Star Mark Repo">
        <img src="https://img.shields.io/badge/Shower_stars_if_you_like_my_repos-15k?style=for-the-badge&color=ffd000&logo=apachespark&logoColor=black"/>
    </a>
</p>
