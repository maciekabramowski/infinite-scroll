'use strict';

$(function(){
   $(window).scroll(function(){
      
//       if ($(document).height() - $(window).height() == $(window).scrollTop()){
//           console.log($(document).height());
//           console.log($(window).height());
//           console.log($(window).scrollTop());
//       console.log('test');
//    
//       }
       
       if ($(window).height() + $(window).scrollTop() == $(document).height()){
           
           
           $.getJSON('https://jsonplaceholder.typicode.com/users', function(data){
             
               for ( var i=0; i<data.length; i++){
                   $('body').append('<p>Nazwa użytkownika: ' + data[i].name + '</p> <p>ID użytkownika: ' + data[i].id + '</p> <p>Url użytkownika: ' + data[i].website + '</p><hr>');
               }
               
               //alternatywnie:
               data.forEach(function(element){
                   console.log(element.name);
               });
        
           })
       }
       
//       if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
//           console.log('soon');
//           
//           $.getJSON('https://jsonplaceholder.typicode.com/users', function(data){
//              console.log(data);
//               
//        
//           })
//       }
   });
});