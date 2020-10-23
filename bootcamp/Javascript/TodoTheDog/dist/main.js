(()=>{"use strict";const t=class{constructor(t){this.element=t,this.parentDiv}renderElement(){const t=document.createElement("div");return t.innerHTML=this.getHTML(),this.parentDiv.appendChild(t),t}getHTML(){return this.element.hasOwnProperty("className")&&"Task"===this.element.className?(this.parentDiv=document.getElementById("tasks"),this.getTaskHTML()):this.element.hasOwnProperty("className")&&"Project"===this.element.className?(this.parentDiv=document.getElementById("projects"),this.getProjectHTML()):void 0}getTaskHTML(){return`<div class="task-title">${this.element.title}</div>`}getProjectHTML(){return`<div class="project-title">${this.element.title}</div>`}};new class{constructor(){this.currentProjectIndex=0,this.projects=[],this.addProject("Path of Exile"),this.addProject("World of Warcraft"),this.renderApplication(),this.addDefaultTasks(),this.setActiveProject(0)}renderApplication(){this.renderSideBar(),this.renderTasks()}renderSideBar(){this.projects.forEach((e=>{new t(e).renderElement()}))}renderTasks(){this.projects[this.currentProjectIndex].tasks.forEach((e=>{new t(e).renderElement()}))}addProject(t){const e=new class{constructor(t){this.className="Project",this.title=t,this.tasks=[]}addTask(t,e,s,r,a){const i=new class{constructor(t,e,s,r,a){this.className="Task",this.title=t,this.description=e,this.status=s,this.startDate=r,this.endDate=a}updateFields(t,e,s,r,a){this.title=t,this.description=e,this.status=s,this.startDate=r,this.endDate=a}completeTask(){this.status=!0}}(t,e,s,r,a);this.tasks.push(i)}removeTask(t){this.tasks.splice(t,1)}getProjectLength(){return this.tasks.length}clearTasks(){this.tasks=[]}}(t);this.projects.push(e)}setActiveProject(t){this.clearTasks(),this.currentProjectIndex=t,this.renderTasks()}clearTasks(){document.getElementById("tasks").innerHTML=""}addDefaultTasks(){this.projects[0].addTask("Get exalted orbs.","Farm heist for more orbs",!1,"10/23/2020","10/24/2020"),this.projects[0].addTask("Level golemancer","Get to level 70",!1,"10/23/2020","10/24/2020"),this.projects[1].addTask("Get 2.5 helm on warlock.","No idols needed, just go to AQ40.",!1,"10/24/2020","10/25/2020"),this.projects[1].addTask("ZG GDKP","Buy idol at all costs",!1,"10/24/2020","10/25/2020"),this.projects[1].addTask("Level hunter","For fun yo",!1,"10/24/2020","10/25/2020")}}})();