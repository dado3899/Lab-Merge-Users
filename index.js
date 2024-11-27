require('datejs');

function combineUsers(...args){
  const combineObject = {
    users: []
  }
  args.forEach((usernames)=>{
    combineObject.users = [...combineObject.users,...usernames]
  })
  
  combineObject.merge_date = Date.today().toString("M/d/yyyy") 

  return combineObject
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};