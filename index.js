var recipe = {eggs: 3,
flour: '3 cups'
}

function updateObjectWithKeyAndValue(recipe, ingredient, quantity){
  return Object.assign ({}, recipe, { butter: ["1 stick"] })
}