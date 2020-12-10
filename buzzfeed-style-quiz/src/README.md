# Buzzfeed style quiz (make your own!)

## A brief refresher on dictionaries
By this point we have already covered variables and introduced the Array data structure.

A dictionary is simply another data structure that is at our disposal. Let's see what makes it so special and powerful.

Think about what you would find in a normal English dictionary. For example, if you wanted to know the definition of the word "Brownie" you'd just look it up in a dictionary and get the following description:

```
Brownie: a baked rectangle of rich chocolate cake without the addition of blueberries
```

We might logically call the above a **dictionary entry** with the word `Brownie` the description `a baked rectangle of rich chocolate cake without the addition of blueberries`.

In JavaScript, we use slightly different terminology when referencing dictionaries. The word `Brownie` is called a **key** and the description `a baked rectangle of rich chocolate cake without the addition of blueberries` is called a **value**.

To declare a variable to be a dictionary, simply use curly braces `{}` and a colon `:` to separate your **key** from your **value**. Note that we can use commas `,` to separate dictionary entries.
```js
let my_recipe_dictionary = {
  "Brownie": "a baked rectangle of rich chocolate cake without the addition of blueberries",
  "Cake": "not a lie",
}
```
But what if we wanted to get values out of the dictionary? What good is a recipe dictionary if you can't access any recipes? To do this we use the same square bracket notation `[]` as Arrays
```js
let brownie_description = my_recipe_dictionary["Brownie"]
```
Note that in the above examples the **values** are strings. but they can also be Numbers, or any type of JavaScript variable type.
```js
let my_multi_value_dictionary = {
  "my first entry": 1, //A Number value is okay
  "another entry": false, //A Boolean value is also okay
  "last entry": [], //Even an Array value is okay!
}
```
Lastly, a bit more terminology. You might frequently hear the term **map** or **mapping** used when describing dictionaries. This simply means that a certain **key** leads to a certain **value**. For example, in the above `my_multi_value_dictionary` we might say that `"my first entry"` **maps** to `1`.

This is what makes dictionaries so powerful: the ability to model mappings or associations. After all, our code is meant to model the real world. Think of the many things you encounter in your everday life that you could store in a dictionary. The power of dictionaries might not be readily apparent right now, so let's jump into the project
