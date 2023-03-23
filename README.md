# NgApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## signageOS Applet development (on connected device)
Run all the following commands in separated terminal windows.
```bash
sos device connect # Choose your device
npm run watch # Watch the changes in Angular application and build result into dist/ folder
npm run watch-applet # Watch newly built Angular appplication files in dist/ folder and upload them to the connected device
```
> Device connect command has to be run again anytime the device is restarted/rebooted or disconnected any other way (`Ctrl+C` -> `↑` -> `⏎`).

> Connected devices are automatically reloaded with "--hot-reload" option. However, the applet running in the emulator on http://localhost:8090 is not automatically reloaded.

> The server with applet for connected device hot reload is started by default on http://localhost:8091 and you have to allow access to the port in local network (`8091`). Otherwise, the device cannot download the built code.

> In case your IP address is not accessible directly, but is accessible on different host or port, you can parametrize using `--server-public-url` option, e.g.: `http://192.168.10.20:9999` (See `sos applet start --help` for more details).
