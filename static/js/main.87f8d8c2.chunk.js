(this["webpackJsonptrivia-project"]=this["webpackJsonptrivia-project"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(5),s=n(3),r=(n(14),n(0));var o=function(e){return Object(r.jsx)("div",{className:"answer-choice",onClick:function(){return e.setAnsDisplayed(e.answer)},children:e.answer})};var a=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[" ",e.question," "]}),e.answer.map((function(t){return Object(r.jsx)(o,{answer:t,onClick:function(){return e.clickFunction()},setAnsDisplayed:e.setAnsDisplayed})}))]})};var u=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:e.goToNextQuestion,children:"Next Question"}),Object(r.jsxs)("p",{children:[" Question #",e.currentQue," "]})]})},h=n(2);var l=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(null),l=Object(s.a)(o,2),j=l[0],d=l[1];return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("h1",{className:"title",children:"Trivia!"}),Object(r.jsx)(a,{question:h[n].question.text,answer:h[n].question.choices,setAnsDisplayed:d}),Object(r.jsx)(u,{goToNextQuestion:function(){i(n+1),d(null)},currentQue:n+1}),Object(r.jsxs)("p",{children:[" ",null===j?"Click an answer above":j===function(e){var t=h[e].question,n=t.correct_choice_index;return t.choices[n]}(n)?"You are correct!":"You are incorrect"," "]})]})};Object(i.createRoot)(document.getElementById("root")).render(Object(r.jsx)(l,{}))},2:function(e){e.exports=JSON.parse('[{"question":{"choices":["40","42","50","56"],"correct_choice_index":2,"text":"How many stars are in the US flag?"}},{"question":{"choices":["Horse","Cheetahs","Tiger","Frog"],"correct_choice_index":1,"text":"Which is the fastest land animal in the world?"}},{"question":{"choices":["Jupiter","Uranus","Mercury","Saturn"],"correct_choice_index":3,"text":"Which planet has the most moon?"}},{"question":{"choices":["Thomas Jeferson","George Washington","Abraham Lincoln","Franklin D. Rossevelt"],"correct_choice_index":2,"text":"Who is on the penny?"}},{"question":{"choices":["False teeth","Typewriter","Hearing Aid","Submarin"],"correct_choice_index":0,"text":"Which one of these invented first?"}}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.87f8d8c2.chunk.js.map