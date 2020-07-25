# WebWorker Example

## Lets first Define a web worker
It’s an actual second thread in JavaScript where we can define parallelism which interacts with main thread behind the scene or we can achieve multithreading by Web Workers.
Web workers does not have access to Window and DOM Object. It is outside UI thread because JavaScript works in single thread

### Webworker uses two methods `postMessage()` and  `onmessage()`

#### This example is about adding warmth filter to image. So the image processing (which converts large amount of pixels) is done in webworker.js so that main thread doesnt get effected and it can perform several other tasks
