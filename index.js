var obj = {}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign ({}, obj, { prop2: 2 });
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value){
  obj.prop2 = 2
  return obj;
}

function deleteFromObjectByKey(obj, key){
  var obj = { prop: 1 }
  var newObj = Object.assign({}, obj)
  delete newObj.prop
  return newObj
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.prop;
  return obj;
}
