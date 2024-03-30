import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const getFirstLetters = (fullName) => {
  var words = fullName.split(" ");

  var firstLetters = "";

  for (var i = 0; i < words.length; i++) {
    firstLetters += words[i].charAt(0);
  }

  return firstLetters.toUpperCase();
}


export {
  cn,
  getFirstLetters
}