var obj = {prop: 1
}

function updateObjectWithKeyAndValue(obj, prop, value){
  return Object.assign ({}, obj, { prop2: 2 });


}

function destructivelyUpdateObjectWithKeyAndValue (obj, prop2, value){
  obj.prop2 = 2
  return obj;
}

function deleteFromObjectByKey(obj, prop){
  var obj = { prop: 1 }
  var newObj = Object.assign({}, obj)
  delete newObj.prop
  return newObj
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, prop){
  delete obj.prop;
  return obj;
}
