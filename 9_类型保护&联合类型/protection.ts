interface Male {
  eat: () => {};
}

interface Female {
  doHomework: () => {};
}

function judgeWho(person: Male | Female) {
  if ("eat" in person) {
    (person as Male).eat();
  } else {
    (person as Female).doHomework();
  }
}

function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  } else {
    return first + second;
  }
}
