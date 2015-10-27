# get-embedded-styles-cli [![Build Status](https://secure.travis-ci.org/johnotander/get-embedded-styles-cli.png?branch=master)](https://travis-ci.org/johnotander/get-embedded-styles-cli) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Get embedded CSS from an HTML string.

## Installation

```bash
npm i -g get-embedded-styles-cli
```

## Usage

```sh
get-embedded-styles --help

  Get embedded CSS from an HTML string.

  Usage
    $ get-embedded-styles <filename.html>
    $ get-embedded-styles < <filename.html>

  Example
    $ get-embedded-styles --help
    $ get-embedded-styles index.html
    $ get-embedded-styles < index.html > index-styles.json
```

```sh
get-embedded-styles path/to/file.html
```

```sh
get-embedded-styles < path/to/file.html
```

## Related

* [get-embedded-styles](https://github.com/johnotander/get-embedded-styles)

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
