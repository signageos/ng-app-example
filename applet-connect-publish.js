const fs = require('fs');
const {
	createAllAppletZips,
	reloadConnectedDevices,
} = require('@signageos/webpack-plugin/dist/ConnectControl/helper');

createAllAppletZips(fs).then(() => reloadConnectedDevices());
