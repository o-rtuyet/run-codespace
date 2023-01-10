var createMsi = require('msi-packager')

var options = {

  // required
  source: '/workspaces/run-codespace/bin',
  output: '/workspaces/run-codespace/bin/setup.msi',
  name: 'Loop Drop',
  upgradeCode: 'YOUR-GUID-HERE',
  version: '1.0.0',
  manufacturer: 'loopjs.com',
  iconPath: '/workspaces/run-codespace/LogoSmartOut.ico',
  executable: '.ngrok.yml',

  // optional
  description: "Some description",
  arch: 'x86',
  localInstall: true

}

createMsi(options, function (err) {
  if (err) throw err
  console.log('Outputed to ' + options.output)
})