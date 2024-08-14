import React, { Component } from 'react'
import '../css/firstpage.css'
class Firstpage extends Component {
    render() {
        function chiqar(){
            var form = document.getElementById('form')
            var i1 = document.getElementById('i1')


            var div1 = document.createElement('div')
            var h4 = document.createElement('h4')
            var btn1 = document.createElement('button')
            var i = document.createElement('i')
         
            i.classList.add('fa-solid')
            i.classList.add('fa-trash')
            
            form.classList.add('overflow-auto')

            i.style.fontSize = "20pt"
            i.style.color = "rgb(201, 201, 240)"

            

            div1.style.width = "95%"
            div1.style.height = "10vh"
            div1.style.backgroundColor = " rgb(32, 32, 46)"
            div1.style.marginTop = "20px"
            div1.style.borderRadius = "15px"
            div1.style.display = "inline-flex"
            div1.style.alignItems = "center"
            div1.style.justifyContent = "space-between"

            h4.style.color = " rgb(201, 201, 240)"
            h4.style.marginLeft = " 15px"
            

            btn1.style.width = "10%"
            btn1.style.height = "10vh"
            btn1.style.backgroundColor = "rgb(32, 32, 46)"
            btn1.style.border = "none"
            
            


            h4.innerText = i1.value
            
            btn1.appendChild(i)
            div1.appendChild(h4)
            div1.appendChild(btn1)
            form.appendChild(div1)
            form.removeChild

            

        }
        
        return (
            <div className='div1'>
                <form id='form' className='form' action="">
                    <h1 id='h1'>TASK LIST 2024</h1>
                    <input id='i1' placeholder='What do you have planned?' type="text" />
                      <input onClick={chiqar} type="button" value="Add Task" />
                      
                </form>
            </div>
        );
    }
}

export default Firstpage;
