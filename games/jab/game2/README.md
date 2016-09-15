# Game 1: Ancient egyptian calculator

In this Game, I wanted to play with [React](https://facebook.github.io/react/) in some creativity Way. 
In general, I like Egyptian Civilization and I decided to create some stuff about this Old culture. Egyptians used hieroglyphs to write.

This example show hieroglyph numbers in a View using Cards components from [Bootstrap V4 Alpha](http://v4-alpha.getbootstrap.com/).

# Technical challenges

## How to write hieroglyphs in a Web Browser?
Unicode has a block for egyptian hieroglyphs, but this section is not managed in Web Browsers.

- https://en.wikipedia.org/wiki/Egyptian_Hieroglyphs_(Unicode_block)
- http://www.unicode.org/charts/PDF/U13000.pdf
- http://unicode-table.com/es/

So, to write a hieroglyph symbols in a web document, one alternative could be embedding the symbols in a webfonts. On Github, exist some examples to use hieroglyph with this approach, but the Javascript algorithms used on that libraries collide with the philosophy React.

- https://mjn.host.cs.st-andrews.ac.uk/egyptian/res/js/

This project renders Hieroglyph react components. In next weeks, I will add the following features:

- Add more range of numbers (0-1*10^6)
- Fractions
- Basic maths operations (Sum, Subtraction & Multiplication)

# References:

- https://en.wikipedia.org/wiki/Ancient_Egyptian_mathematics
- https://en.wikipedia.org/wiki/Moscow_Mathematical_Papyrus
- https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus

JAB


