"use strict";

const people = [
  { name: "Makis", year: 2001 },
  { name: "Bekee", year: 1999 },
  { name: "Mecky", year: 2003 },
  { name: "Angel", year: 2008 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You're the best", id: 2039842 },
  { text: "Are you a human is my favorite series ever!", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Array.prototype.some()... checks if at least one item from the array meets a condition
const isAdult = people.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 18;
});
console.log({ isAdult }); //true

// Array.prototype.every() ... checks if *every* item meets the given condition
const isEveryoneAdult = people.every((person) => {
  return new Date().getFullYear() - person.year >= 18;
});
console.log({ isEveryoneAdult }); //false

// Array.prototype.find()... returns just *the one* you're looking for
const findID = comments.find((comment) => {
  return comment.id === 823423;
});
console.log(findID);

// Array.prototype.findIndex()
// Task=> delete the comment with the id of 2039842
const findIndex = comments.findIndex((comment) => {
  return comment.id === 2039842;
});

const deleteId = (del) => {
  comments.splice(findIndex, 1);
};
deleteId();

console.log(findIndex);
console.log(comments);
