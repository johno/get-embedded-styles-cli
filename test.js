import childProcess from 'child_process'
import test from 'ava'
import pify from 'pify'

test('file', async t => {
  const stdout = await pify(childProcess.execFile)('./cli.js', ['fixture.html'], { cwd: __dirname })
  t.ok(stdout.trim())
})

test('stdio', async t => {
  const stdout = await pify(childProcess.execFile)('./cli.js < fixture.html', { cwd: __dirname })
  t.ok(stdout.trim())
})
