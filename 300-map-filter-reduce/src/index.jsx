import emojipedia from "./emojipedia"

const trunmean = emojipedia.map(function(meann){
  return meann.meaning.substring(0,100)
})

console.log(trunmean);