# Unhandled Promise Rejection in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js asynchronous programming: improper error handling in asynchronous operations within an HTTP server.  The example shows how an unhandled promise rejection can occur if an asynchronous function throws an error but isn't correctly caught within the promise chain.

## Problem

The `doSomethingAsync` function makes an asynchronous call and may throw an error if the result is null. While there is a `.catch` block, there may be scenarios (due to the async nature and complexity of `someAsyncOperation`) where exceptions are not handled, leading to an unhandled promise rejection.  This can cause the server to crash or behave unpredictably.

## Solution

The solution focuses on robust error handling within the asynchronous operation and ensuring that all potential error paths are covered.  This prevents unhandled promise rejections and provides a more reliable and robust server.

## How to Run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the error. 
4. Run `node bugSolution.js` to see the corrected version.