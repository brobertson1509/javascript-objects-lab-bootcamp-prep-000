var obj = {prop: 1
}

function updateObjectWithKeyAndValue(obj, prop2, value){
  return Object.assign ({}, obj, { prop2: 2 });
var obj = {prop: "Old Value"};
  var newObj = updateObjectWithKeyAndValue(obj, "prop", "New Value")
  return newObj;

}

function destructivelyUpdateObjectWithKeyAndValue (obj, prop2, value){
  obj.prop2 = 2
  return obj;
}

function deleteFromObjectByKey(obj, prop){
  var obj = { prop: 1 };
  var newObj = deleteFromObjectByKey(obj, 'prop')
}

function destructivelyDeleteFromObjectByKey(obj, prop){
  delete obj.prop;
  return obj;
}
