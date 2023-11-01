/*const Counter = {
    data () {
        return {Counter1:0,
        title1:"Счётчик",};
    },
    methods: {
        increaseConter () {
            this.Counter1++;
        },

        decreaseConter () {
            this.Counter1--;
        },

    },
};

Vue.createApp(Counter).mount("#count");

const Name ={
    data(){
        return {
            name1:""
        };
    },
};
Vue.createApp(Name).mount("#nameApp");*/
//домашняя работа



const ToDo={
    data () {
       return  {
                item: "",
       
       todoData: [             
             ],
                 
        comleteData: [

        ],
    };
       
            },



    methods: {
        addItem(){
                     if (!this.item.trim()){
                    return}
                     this.todoData.push({
                    
                     text:this.item,
                     
                    });
                    this.item=""  
                 },
        delItem (index) {
            this.todoData.splice(
                (index), 1);

                },
     
             },

};


Vue.createApp(ToDo).mount("#todoList");

//подключение к базе и вывод на экран

const todoItem = {
    props: ["todo", "index"],
    template:
    `<div>{{index}}. {{todo.title}} : {{todo.completed}}</div>
`,
};

const todo= Vue.createApp({
    data(){
        return{
            todoList:[],
        };
    },
    components: {
        "todo-item": todoItem,
    },
   
    mounted() {
        fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => (this.todoList =json));
    },
});

todo.mount("#todoDiv");