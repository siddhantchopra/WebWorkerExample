# WebWorker Example

## Lets first Define a web worker
It’s an actual second thread in JavaScript where we can define parallelism which interacts with main thread behind the scene or we can achieve multithreading by Web Workers.
Web workers does not have access to Window and DOM Object. It is outside UI thread because JavaScript works in single thread

### Webworker uses two methods `postMessage()` and  `onmessage`
