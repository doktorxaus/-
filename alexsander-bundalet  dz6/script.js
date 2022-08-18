class Human{
    constructor(рост, вес, имя, год, пол, инвалидности){
        this.рост=рост;
        this.вес=вес;
        this.имя=имя
        this.год=год
        this.пол=пол
        this.инвалидности=инвалидности
      

    }
    
    get getInfo (){
        let info = {
            рост: this.рост,
            имя: this.имя,
            вес: this.вес,
            год: this.год,
            пол:this.пол,
           инвалидности:this.инвалидности
        }
        console.log(info)
    }
    


    
  set NewName(имя){
    this.имя=имя
   }



  set sayHello(say) {
    console.log( 'Hello, I am ' + this.имя);
  }




  set setИнвал(инвалидности){
   this.инвалидности=инвалидности

  }

 
  

}



let firstHuman=new Human('177','77','alex',new Date,'M','BOOLEAN')

firstHuman.getInfo;
firstHuman.NewName = 'notalex';
firstHuman.getInfo;
firstHuman.sayHello = 'Hello, I am ' + this.имя;
firstHuman.setИнвал = инвалидности = false 
firstHuman.getInfo;




///////////////////////////////////////////////////////////////



class Human{
  constructor(рост, вес, имя, год, пол, инвалидности){
      this.рост=рост;
      this.вес=вес;
      this.имя=имя
      this.год=год
      this.пол=пол
      this.инвалидности=инвалидности

  }
      get getInfo (){
                let info = {
                    рост: this.рост,
                    имя: this.имя,
                    вес: this.вес,
                    год: this.год,
                    пол:this.пол,
                   инвалидности:this.инвалидности
                }
                console.log(info)
            }
            

          }          





class Фронтендразработчик extends Human{
     
  constructor(рост, вес, имя, год, пол, инвалидности){ 
      super(рост, вес, имя, год, пол, инвалидности);



  }
}




class Строитель extends Human{
     
  constructor(рост, вес, имя, год, пол, инвалидности){ 
      super(рост, вес, имя, год, пол, инвалидности);
  }
}
  


  

  let firstHuman=new Human('177','77','alex',new Date,'M',false)

firstHuman.getInfo;


let firstФронтендразработчик = new Фронтендразработчик ('177','77','alex',new Date,'M',false)
console.log(firstФронтендразработчик)



let firstСтроитель=new Строитель('166','77','JON',new Date,'Ж',false)
console.log(firstСтроитель)






/////////////////////////////////////////////////////////////////
class Human{
    constructor(рост, вес, имя, год, пол, инвалидности){
        this.рост=рост;
        this.вес=вес;
        this.имя=имя
        this.год=год
        this.пол=пол
        this.инвалидности=инвалидности
  
    }
        get getInfo (){
                  let info = {
                      рост: this.рост,
                      имя: this.имя,
                      вес: this.вес,
                      год: this.год,
                      пол:this.пол,
                     инвалидности:this.инвалидности
                  }
                  console.log(info)
              }
              
  
            }          
  
      let myHUMAN=new  Human  ('','','',new Date,'',false) 
      console.log(myHUMAN)
  
  //////////////////////////////////////////////////////////////////////////////////////////////////
  class Фронтендразработчик extends Human{
    constructor(рост, вес, имя, год, пол, инвалидности,началокарьеры,предыдущиекомпании){ 
      super(рост, вес, имя, год, пол, инвалидности);
      let MассивOбъектов =[{start: new Date(1995, 11, 17),end:new Date(1996, 11, 17), salaryPerMonth: 1000,position: 'middle' ,companyName: 'Oracle'}]
      this.началокарьеры=началокарьеры;
      this.предыдущиекомпании=предыдущиекомпании
      this.предыдущиекомпании=MассивOбъектов
     
      }

  
     
      
      
      
     
       sau(){
        console.log( 'Hello, I am ' + this.имя +', Фронтенд разработчик.Работаю с '+ this.началокарьеры);
       }

       salary(){
        let salaryPerMonth =1000
        
        console.log(salaryPerMonth)
       }



       
     

       }

       
      



  let myФронтендразработчик = new Фронтендразработчик ('177','77','alex', new Date(1992,12,25,3,24,0),'M',false,new Date(2002,01,01,2,24.0),[]);
  
console.log(myФронтендразработчик);
myФронтендразработчик.sau()
myФронтендразработчик.salary()





/////////////////////////////////////////////////////////////////////////////////////////////////////////

let text = "I_WANT_TO_STAY_WITH_iteasy_COURSE";
let expected = text.replace(/I_WANT_TO_STAY_WITH_iteasy_COURSE/g, " I want to stay with IT-EASY course " );
console.log(expected)











   let text2 = 'I_WANT_TO_STAY_WITH_iteasy_COURSE';
   let expected2 = text.slice(0,1) .toUpperCase() + text.slice(1,20) .toLowerCase() + text.slice(20,27) .toUpperCase()+ text.slice(27,36).toLowerCase()

                function first(str) {
                    let firstLetter = str.substr(0,1);
                    return firstLetter  + str.substr(1);
                }
                function sampl(usrString) {
                    let workArray = usrString.split('_');
                    for (let i = 0; i < workArray.length; i++) {
                        workArray[i] = first(workArray[i]);
                    }
                    console.log(workArray.join(' '));
                }

                
                sampl(expected2);










