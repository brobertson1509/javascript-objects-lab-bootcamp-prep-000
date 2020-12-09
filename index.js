var obj = {prop: 1
}

function updateObjectWithKeyAndValue(obj, prop2, value){
  return Object.assign ({}, obj, { prop2: 2 });
  var newObj = Object.assign ({}, obj, { prop: "new value" });
}

function destructivelyUpdateObjectWithKeyAndValue (obj, prop2, value){
  obj.prop2 = 1
  return obj;
}

function deleteFromObjectByKey(obj, prop){
  
}
function destructivelyDeleteFromObjectByKey(obj, prop){
  
}