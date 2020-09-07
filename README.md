# Vending Machine Simulator

_Single Page Application_

The goal of this assignment is for you to create a single page application to help an end-user manage the simulation of a vending machine capable of asynchronous requests.

Write a program to mock a vending machine, you send/insert orders into the machine and it should prepare/output your selection. Each selection of “food”
should compute differently into the machine, hence, take more or less time to prepare.

On app load, the end user is presented with a list of items from which he can select from, the app should display the items that have been selected, the time left for these to be dispatched and also update this
list with items that have been dispatched.

Example:

- User selects “x” item from the machine.
- Machine takes the order for item “x” and starts processing it.
- Based on the selection the machine should take “x” amount of time to prepare it.
- While preparing any selection the machine should be able to accept more orders of the same or other items.

Orders should be dispatched as soon as they are ready, regardless of the order they were requested.
