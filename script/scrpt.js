const {createApp} = Vue;

createApp({
data(){
  return{
  lists:
    [
      {
        text:'fare esercizi',
        done: true,
      },
      {
        text:'comprare da mangiare',
        done: false,
      },
      {
        text:'guardare la partita',
        done: false,
      },
      {
        text:'uscire con amici',
        done: true,
      },
    ],
    AddToDo: '',
    
  }
},

methods:{
  deleteRow(i){
    this.lists.splice(i,1);
  },
  NewToDo(){
    const ToDo = {
      text: this.AddToDo,
      done: false
    }
    console.log(this.AddToDo)
    this.lists.unshift(ToDo)
    this.AddToDo="";
  }
  
}
}).mount('#app')