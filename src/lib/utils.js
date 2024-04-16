import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const getFirstLetters = (fullName) => {
  let words = fullName?.split(" ");

  let firstLetters = "";

  for (let i = 0; i < words?.length; i++) {
    firstLetters += words[i].charAt(0);
  }

  return firstLetters.toUpperCase();
}


export {
  cn,
  getFirstLetters
}