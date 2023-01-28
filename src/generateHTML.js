const data = [
    { name: 'a', id: '1', email: 'a@a.com', officeNumber: '1234', role: 'Manager'},
    { name: 'b', id: '2', email: 'b@a.com', github: 'b987', role: 'Engineer' },
    { name: 'c', id: '3', email: 'c@a.com', github: 'c987', role: 'Engineer'},
    { name: 'd', id: '4', email: 'd@a.com', github: 'd987', role: 'Engineer'},
    { name: 'z', id: '5', email: 'z@a.com', school: 'college', role: 'Intern'},
    { name: 'y', id: '6', email: 'y@a.com', school: 'college', role: 'Intern' },
  ]
const manCard = function(manData){

}

const generateHTML = function(x){
    for(let i = 0; i < x.length; i++ ){
        if (i.role === 'Manager'){
            const manager = manCard(x[i])
        } else if ()
    }
}

generateHTML(data);


