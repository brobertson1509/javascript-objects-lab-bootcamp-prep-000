var obj = {prop: 1
}

function updateObjectWithKeyAndValue(obj, prop2, value){
  return Object.assign ({}, obj, { prop2: 2 });
  obj.prop =1:
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue (obj, prop2, value){
  obj.prop2 = 2
  return obj;
}

function deleteFromObjectByKey(obj, prop){

}

function destructivelyDeleteFromObjectByKey(obj, prop){
  delete obj.prop;
  return obj;
}
