#!/usr/bin/env node
'use strict'

const fs = require('fs')
const meow = require('meow')
const fileExists = require('file-exists')
const getEmbeddedStyles = require('get-embedded-styles')

const cli = meow(`
  Usage
    $ get-embedded-styles <filename.html>
    $ get-embedded-styles < <filename.html>

  Example
    $ get-embedded-styles --help
    $ get-embedded-styles index.html
    $ get-embedded-styles < index.html > index-styles.json
`)

function init (html) {
  console.log(getEmbeddedStyles(html))
}

const input = cli.input[0]

if (!input && process.stdin.isTTY) {
  console.error('Specify an html file name')
  process.exit(1)
}

if (input) {
  if (/\.html$/i.test(input) && fileExists(input)) {
    const html = fs.readFileSync(input, 'utf8')
    init(html)
  } else {
    console.error('Specify an html file name')
  }
} else {
  process.stdin.once('data', data => {
    init(data.toString('utf8'))
  })
}
