import {Modal} from './modal'

const modal = Modal()

const checkButtons = document.querySelectorAll("a.actions a.check")

checkButtons.forEach( button => {
  button.eventListener("click", event =>{
    
    modal.open()
  })
})


