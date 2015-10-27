import test from 'ava'
import stream from 'stream'
import childProcess from 'child_process'

test('get-embedded-styles-cli gets embedded styles from std in', t => {
  t.plan(1)

  const html = '<style>.foo { color: tomato; }</style><br><style>.bar { color: green; }</style>'
  const s = new stream.Readable()
  s._read = function () {}
  s.push(html)
  s.push(null)

  const cp = childProcess.execFile('../cli.js < <style>.foo { color: tomato; }</style><br><style>.bar { color: green; }</style>', [])
})
