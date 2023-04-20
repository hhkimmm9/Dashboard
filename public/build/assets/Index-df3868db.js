import{B as p,C as g,P as $,o as b,f as S,b as s,t as l,a as e,w as r,n as f,u as n,g as k,d as _,c as q,l as T,i as y,q as v,A,X as B}from"./app-77389f62.js";import{_ as w}from"./Checkbox-9e2165a6.js";import{_ as C}from"./Modal-3936c845.js";const E={class:"space-y-2"},L={class:"text-xl"},D={class:"space-y-2"},j={class:"flex flex-row items-center space-x-2"},M={class:"w-full flex flex-row justify-between items-center"},z={class:"bg-yellow-200 text-violet-500 px-1"},G={class:"flex gap-4 text-gray-600"},I={class:"flex gap-1 items-center"},N=s("span",{class:"material-symbols-outlined"}," exclamation ",-1),U={class:"flex gap-1 items-center"},V=s("span",{class:"material-symbols-outlined text-lg"}," chat_bubble ",-1),K={class:"flex flex-row items-center space-x-2"},R={class:"w-full flex flex-row justify-between items-center"},F={class:"bg-yellow-200 text-violet-500 px-1"},P={class:"flex gap-4 text-gray-600"},Q={class:"flex gap-1 items-center"},X=s("span",{class:"material-symbols-outlined"}," exclamation ",-1),H={class:"flex gap-1 items-center"},J=s("span",{class:"material-symbols-outlined text-lg"}," chat_bubble ",-1),h={__name:"TaskContainer",props:["label","first_task","first_task_comments","first_task_subtasks","second_task","second_task_comments","second_task_subtasks"],setup(t){const a=t;p(),g();const i=$({is_completed:null});function c(d,o){i.is_completed=d,i.patch(`blocksix/${o==0?a.first_task.id:a.second_task.id}`,{onSuccess:()=>i.is_completed=null})}return(d,o)=>(b(),S("div",E,[s("span",L,l(t.label),1),s("div",D,[s("div",j,[e(w,{name:"first_task","onUpdate:checked":o[0]||(o[0]=m=>c(m,0)),checked:t.first_task.is_completed==1},null,8,["checked"]),s("div",M,[e(n(k),{href:`blocksix/${t.first_task.id}`,method:"GET",as:"div",class:"flex flex-row space-x-1 cursor-pointer"},{default:r(()=>[s("span",z,l(t.first_task.keyword),1),s("span",{class:f(t.first_task.is_completed?"line-through":"")},l(t.first_task.description),3)]),_:1},8,["href"]),s("div",G,[s("div",I,[N,_(" "+l(t.first_task_subtasks?t.first_task_subtasks.length:0),1)]),s("div",U,[V,_(" "+l(t.first_task_comments?t.first_task_comments.length:0),1)])])])]),s("div",K,[e(w,{name:"second_task","onUpdate:checked":o[1]||(o[1]=m=>c(m,1)),checked:t.second_task.is_completed==1},null,8,["checked"]),s("div",R,[e(n(k),{href:`blocksix/${t.second_task.id}`,method:"GET",as:"div",class:"flex flex-row space-x-1 cursor-pointer"},{default:r(()=>[s("div",F,l(t.second_task.keyword),1),s("div",{class:f(t.second_task.is_completed?"line-through":"")},l(t.second_task.description),3)]),_:1},8,["href"]),s("div",P,[s("div",Q,[X,_(" "+l(t.second_task_subtasks?t.second_task_subtasks.length:0),1)]),s("div",H,[J,_(" "+l(t.second_task_comments?t.second_task_comments.length:0),1)])])])])])]))}},O=s("div",{class:"flex space-x-2"},[s("div",{class:"bg-yellow-200 px-2 text-violet-500 font-bold rounded-md"},"Keyword"),s("div",null,"Short Description")],-1),W=s("div",{class:"flex flex-row space-x-3"},[s("input",{type:"text",class:"w-full rounded"}),s("button",{class:"border border-blue-200 bg-blue-400 text-white font-bold px-2 py-1 rounded hover:bg-blue-500"},"Submit")],-1),Y=s("div",{class:"border border-gray-100 bg-gray-50 px-5 py-5 rounded space-y-5 h-72 overflow-y-auto"},[s("div",{class:"flex flex-row space-x-4 items-center"},[s("div",null,[s("div",{class:"flex flex-row space-x-4"},[s("div",{class:"flex flex-row items-center space-x-1"},[s("span",{class:"material-symbols-outlined cursor-pointer"},"push_pin"),s("span",{class:"material-symbols-outlined opacity-50 hover:opacity-80 cursor-pointer"},"cancel")]),s("div",{class:"border bg-white p-3 rounded w-full"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident molestiae facilis eligendi impedit, molestias, non quos excepturi minus obcaecati dolor iusto officia assumenda culpa quasi ea labore! Aut accusamus minus necessitatibus provident ducimus quia magni dolorum ut, nesciunt saepe architecto, nisi est neque dicta similique amet quidem cupiditate inventore. ")]),s("div",{class:"text-end text-xs text-gray-500 mt-1"},"2023-03-05 어쩌고 저쩌고")])]),s("div",{class:"flex flex-row space-x-4 items-center"},[s("div",null,[s("div",{class:"flex flex-row space-x-4"},[s("div",{class:"flex flex-row items-center space-x-1"},[s("span",{class:"material-symbols-outlined cursor-pointer"},"push_pin"),s("span",{class:"material-symbols-outlined opacity-50 hover:opacity-80 cursor-pointer"},"cancel")]),s("div",{class:"border bg-white p-3 rounded w-full"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident molestiae facilis eligendi impedit, molestias, non quos excepturi minus obcaecati dolor iusto officia assumenda culpa quasi ea labore! Aut accusamus minus necessitatibus provident ducimus quia magni dolorum ut, nesciunt saepe architecto, nisi est neque dicta similique amet quidem cupiditate inventore. ")]),s("div",{class:"text-end text-xs text-gray-500 mt-1"},"2023-03-05 어쩌고 저쩌고")])])],-1),Z={__name:"TaskCommentModal",setup(t){const a=p(),i=g(),c=()=>{a.open_comment_modal=!1,i.modal_target_container=null};return(d,o)=>(b(),q(C,{show:n(a).open_comment_modal},{default:r(()=>[s("div",{class:"space-y-3 p-5"},[O,W,Y,s("div",{class:"flex justify-end"},[s("button",{onClick:c,class:"border border-gray-200 bg-gray-50 hover:bg-gray-200 px-2 py-1 rounded"}," Close ")])])]),_:1},8,["show"]))}},ss={class:"space-y-4 p-5"},ts={class:"flex flex-col space-y-2 border border-gray-200 rounded px-4 py-5 bg-gray-100"},es=s("label",{for:"keyword"}," Keyword ",-1),as=["value"],os={class:"flex flex-col space-y-2 border border-gray-200 rounded px-4 py-5 bg-gray-100"},ns=s("label",{for:"description"}," Short Description ",-1),is=["value"],cs={__name:"TaskQuickEditModal",setup(t){const a=g(),i=p(),c=$({keyword:String,description:String}),d=async()=>{await c.patch(`blocksix/${a.modal_target_container.id}`),o()},o=()=>{a.modal_target_container=null,i.open_quick_edit_modal=!1};return(m,u)=>(b(),q(C,{show:n(i).open_quick_edit_modal},{default:r(()=>[s("div",ss,[s("div",ts,[es,s("input",{onInput:u[0]||(u[0]=x=>n(c).keyword=x.target.value),value:n(a).modal_target_container.keyword,type:"text",class:"border-none focus:ring-blue-500 focus:ring-2"},null,40,as)]),s("div",os,[ns,s("input",{onInput:u[1]||(u[1]=x=>n(c).description=x.target.value),value:n(a).modal_target_container.description,type:"text",class:"border-none focus:ring-blue-500 focus:ring-2"},null,40,is)]),s("div",{class:"flex justify-end space-x-3"},[s("button",{onClick:d,class:"bg-blue-400 border border-blue-300 px-3 py-2 rounded text-white font-bold hover:bg-blue-500 capitalize"}," update "),s("button",{onClick:o,class:"border border-gray-200 px-3 py-2 rounded font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 capitalize"}," cancel ")])])]),_:1},8,["show"]))}},ls={class:"max-w-7xl mx-auto sm:px-6 lg:px-32 h-full py-10 flex flex-row"},ds={class:"relative bg-white border border-gray-200 shadow w-2/3 mx-auto p-6 flex flex-col space-y-4 rounded-lg"},rs={class:"font-bold text-2xl"},us=s("hr",{class:"my-4"},null,-1),ms=s("hr",{class:"my-4"},null,-1),_s=s("button",{class:""},[s("span",{class:"material-symbols-outlined"},"keyboard_double_arrow_left")],-1),fs=s("button",{class:""},[s("span",{class:"material-symbols-outlined"},"keyboard_double_arrow_right")],-1),hs={__name:"Index",props:["tasks","comments","subtasks"],setup(t){const a=t,i=T(()=>new Date(a.tasks.data[0].created_at).toDateString()),c=y();v(c,{content:"Edit the task",duration:0});const d=y();return v(d,{content:"Leave a comment",duration:0}),(o,m)=>{const u=A("AuthenticatedLayout");return b(),S("div",null,[e(n(B),{title:"BlockSix (index)"}),e(u,{class:"relative"},{default:r(()=>[s("div",ls,[s("div",ds,[s("div",rs,l(n(i)),1),s("div",null,[e(h,{label:"Morning",first_task:t.tasks.data[0],first_task_comments:t.comments[0],first_task_subtasks:t.subtasks[0],second_task:t.tasks.data[1],second_task_comments:t.comments[1],second_task_subtasks:t.subtasks[1]},null,8,["first_task","first_task_comments","first_task_subtasks","second_task","second_task_comments","second_task_subtasks"]),us,e(h,{label:"Afternoon",first_task:t.tasks.data[2],first_task_comments:t.comments[2],first_task_subtasks:t.subtasks[2],second_task:t.tasks.data[3],second_task_comments:t.comments[3],second_task_subtasks:t.subtasks[3]},null,8,["first_task","first_task_comments","first_task_subtasks","second_task","second_task_comments","second_task_subtasks"]),ms,e(h,{label:"Evening",first_task:t.tasks.data[4],first_task_comments:t.comments[4],first_task_subtasks:t.subtasks[1],second_task:t.tasks.data[5],second_task_comments:t.comments[5],second_task_subtasks:t.subtasks[5]},null,8,["first_task","first_task_comments","first_task_subtasks","second_task","second_task_comments","second_task_subtasks"])]),e(n(k),{href:t.tasks.next_page_url,class:f(["absolute -left-10 top-48",t.tasks.next_page_url?"visible":"hidden"])},{default:r(()=>[_s]),_:1},8,["href","class"]),e(n(k),{href:t.tasks.prev_page_url,class:f(["absolute -right-10 top-48",t.tasks.prev_page_url?"visible":"hidden"])},{default:r(()=>[fs]),_:1},8,["href","class"])])])]),_:1}),e(Z),e(cs)])}}};export{hs as default};