(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(15),r=a.n(o),m=(a(77),a(16)),c=a(17),i=a(20),s=a(18),d=(a(78),a(79),a(113)),u=a(110),p=a(12),h=a(10),E=a.n(h),b=a(19),f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,{style:{width:"20rem"}},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,"Room Info"),this.props.roomData?l.a.createElement("div",null,l.a.createElement(d.a.Subtitle,{style:{marginBottom:"1rem"}},this.props.roomData.name),l.a.createElement(b.a,{onClick:function(){localStorage.removeItem("room"),localStorage.removeItem("password"),window.location.reload()},style:{marginTop:"0rem"}},"Logout"),l.a.createElement(u.a,{style:{marginTop:"1rem"}},l.a.createElement("tbody",null,Object.keys(this.props.roomData.members).map((function(t){return Object.keys(e.props.roomData.members[t]).map((function(a){return l.a.createElement("tr",null,l.a.createElement("td",null,t," owes ",a," $",e.props.roomData.members[t][a].toFixed(2)))}))}))))):l.a.createElement(p.a,{animation:"border"})))}}]),a}(l.a.Component),g=a(30),y=a.n(g),v=a(8),w=a(41),_=a(28);function C(e){var t=e.show,a=e.onHide,o=e.members,r=Object(n.useState)(!1),m=Object(w.a)(r,2),c=m[0],i=m[1],s=Object(_.a)({initialValues:{buyer:o[0],communal_total:0,communal_description:""},onSubmit:function(e){console.log("SUBMITTED FORMIK THING"),console.log(e),i(!0),E.a.post("/api/trips",{room:localStorage.getItem("room"),password:localStorage.getItem("password"),buyer:e.buyer,communal:{total:e.communal_total,description:e.communal_description},personals:{Anders:{total:null==e.anders_total?0:e.anders_total,description:null==e.anders_description?"":e.anders_description},Andrew:{total:null==e.andrew_total?0:e.andrew_total,description:null==e.andrew_description?"":e.andrew_description},Jason:{total:null==e.jason_total?0:e.jason_total,description:null==e.jason_description?"":e.jason_description},Ryan:{total:null==e.ryan_total?0:e.ryan_total,description:null==e.ryan_description?"":e.ryan_description},Milind:{total:null==e.milind_total?0:e.milind_total,description:null==e.milind_description?"":e.milind_description}}}).then((function(e){console.log("Transaction POST response:"),console.log(e.data),i(!1),a()}))}});return t?l.a.createElement(v.a,{show:t,onHide:a},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Add New Trip")),l.a.createElement(v.a.Body,null,l.a.createElement("form",{onSubmit:s.handleSubmit,noValidate:!0},l.a.createElement("label",{for:"buyer"},"Buyer:"),l.a.createElement("br",null),l.a.createElement("select",{id:"buyer",name:"buyer",value:s.values.buyer,onChange:s.handleChange},o.map((function(e){return l.a.createElement("option",{value:e},e)}))),l.a.createElement("br",null),l.a.createElement("label",{for:"communal_total"},"Communal Total:"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"communal_total",name:"communal_total",value:s.values.communal_total,onChange:s.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{for:"communal_description"},"Description of Communal Items:"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"6",cols:"60",id:"communal_description",name:"communal_description",value:s.values.communal_description,onChange:s.handleChange}),l.a.createElement("label",{for:"anders_total"},"Anders's Total:"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"anders_total",name:"anders_total",value:s.values.anders_total,onChange:s.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{for:"anders_description"},"Description of Anders's Items:"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"6",cols:"60",id:"anders_description",name:"anders_description",value:s.values.anders_description,onChange:s.handleChange}),l.a.createElement("label",{for:"andrew_total"},"Andrew's Total:"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"andrew_total",name:"andrew_total",value:s.values.andrew_total,onChange:s.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{for:"andrew_description"},"Description of Andrew's Items:"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"6",cols:"60",id:"andrew_description",name:"andrew_description",value:s.values.andrew_description,onChange:s.handleChange}),l.a.createElement("label",{for:"jason_total"},"Jason's Total:"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"jason_total",name:"jason_total",value:s.values.jason_total,onChange:s.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{for:"jason_description"},"Description of Jason's Items:"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"6",cols:"60",id:"jason_description",name:"jason_description",value:s.values.jason_description,onChange:s.handleChange}),l.a.createElement("label",{for:"ryan_total"},"Ryan's Total:"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"ryan_total",name:"ryan_total",value:s.values.ryan_total,onChange:s.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{for:"ryan_description"},"Description of Ryan's Items:"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"6",cols:"60",id:"ryan_description",name:"ryan_description",value:s.values.ryan_description,onChange:s.handleChange}),l.a.createElement("label",{for:"milind_total"},"Milind's Total:"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"milind_total",name:"milind_total",value:s.values.milind_total,onChange:s.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{for:"milind_description"},"Description of Milind's Items:"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"6",cols:"60",id:"milind_description",name:"milind_description",value:s.values.milind_description,onChange:s.handleChange}))),l.a.createElement(v.a.Footer,null,c?l.a.createElement(p.a,{animation:"border"}):l.a.createElement(b.a,{variant:"primary",type:"submit",onClick:s.handleSubmit},"Add Trip"))):l.a.createElement("div",null)}var S=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleShowInfoModal=function(e){n.setState({showInfoModal:!0,selectedTripId:e})},n.handleCloseInfoModal=function(){n.setState({showInfoModal:!1})},n.handleShowAddTripModal=function(){n.setState({showAddTripModal:!0})},n.handleCloseAddTripModal=function(){n.setState({showAddTripModal:!1}),window.location.reload()},n.state={trips:null,showInfoModal:!1,selectedTripId:null,showAddTripModal:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/trips",{params:{room:localStorage.getItem("room"),password:localStorage.getItem("password")}}).then((function(t){e.setState({trips:t.data.trips})}))}},{key:"render",value:function(){var e=this,t=[];Object.keys(this.props.roomData.members).forEach((function(e){t.includes(e)||t.push(e)}));var a=null;return this.state.trips&&this.state.showInfoModal&&(a=this.state.trips.filter((function(t){return t._id==e.state.selectedTripId}))[0]),l.a.createElement("div",null,this.state.showInfoModal&&l.a.createElement(v.a,{show:this.state.showInfoModal,onHide:this.handleCloseInfoModal},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Trip Info")),l.a.createElement(v.a.Body,null,l.a.createElement("p",null,l.a.createElement("b",null,"Date Recorded:")," ",y()(a.timestamp).format("ll")),l.a.createElement("p",null,l.a.createElement("b",null,"Buyer:")," ",a.buyer),l.a.createElement("p",null,l.a.createElement("b",null,"Total Cost of Communal Items:")," $",a.communal.total.toFixed(2)),l.a.createElement("b",null,"Description of Communal Items:"),l.a.createElement("p",{style:{marginLeft:"1rem"}},a.communal.description),l.a.createElement("h4",null,"Individual Costs"),Object.keys(a.personals).map((function(e){return l.a.createElement("div",null,l.a.createElement("b",null,e),l.a.createElement("p",{style:{marginLeft:"2rem"}},l.a.createElement("b",null,"Cost: "),"$",a.personals[e].total.toFixed(2)),l.a.createElement("b",{style:{marginLeft:"2rem"}},"Description:"),l.a.createElement("p",{style:{marginLeft:"3rem"}},a.personals[e].description))}))),l.a.createElement(v.a.Footer,null,l.a.createElement(b.a,{variant:"danger",onClick:function(){console.log("DELETING TRIP: ",a._id),E.a.delete("/api/trips",{params:{room:localStorage.getItem("room"),password:localStorage.getItem("password"),trip_id:a._id}}).then((function(e){window.location.reload()}))}},"Delete Trip"))),l.a.createElement(C,{show:this.state.showAddTripModal,onHide:this.handleCloseAddTripModal,members:t}),l.a.createElement(d.a,{style:{}},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,"Trips"),this.state.trips?l.a.createElement("div",null,l.a.createElement(b.a,{onClick:this.handleShowAddTripModal},"Add New"),l.a.createElement(u.a,{bordered:!0,hover:!0,style:{marginTop:"1em"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Buyer"),l.a.createElement("th",null,"Communal"),t.map((function(e){return l.a.createElement("th",null,e)})),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.state.trips.map((function(a){return l.a.createElement("tr",null,l.a.createElement("td",null,y()(a.timestamp).format("l")),l.a.createElement("td",null,a.buyer),l.a.createElement("td",null,"$",a.communal.total.toFixed(2)),t.map((function(e){return Object.keys(a.personals).includes(e)?l.a.createElement("td",null,"$",a.personals[e].total.toFixed(2)):l.a.createElement("td",null,"$0.00")})),l.a.createElement("td",null,l.a.createElement(b.a,{size:"sm",onClick:function(){e.handleShowInfoModal(a._id)}},"More")))}))))):l.a.createElement(p.a,{animation:"border"}))))}}]),a}(l.a.Component);function I(e){var t=e.show,a=e.onHide,o=e.members,r=Object(n.useState)(!1),m=Object(w.a)(r,2),c=m[0],i=m[1];Object(n.useEffect)((function(){}));var s=Object(_.a)({initialValues:{payer:o[0],receiver:o[0],amount:0,method:"Venmo"},onSubmit:function(e){console.log("SUBMITTED FORMIK THING"),console.log(e),i(!0),E.a.post("/api/transactions",{room:localStorage.getItem("room"),password:localStorage.getItem("password"),payer:e.payer,receiver:e.receiver,method:e.method,amount:e.amount}).then((function(e){console.log("Transaction POST response:"),console.log(e.data),i(!1),a()}))}});return t?l.a.createElement(v.a,{show:t,onHide:a},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Add New Transaction")),l.a.createElement(v.a.Body,null,l.a.createElement("form",{onSubmit:s.handleSubmit,noValidate:!0},l.a.createElement("label",{for:"payer"},"Payer:"),l.a.createElement("br",null),l.a.createElement("select",{id:"payer",name:"payer",value:s.values.payer,onChange:s.handleChange},o.map((function(e){return l.a.createElement("option",{value:e},e)}))),l.a.createElement("br",null),l.a.createElement("label",{for:"amount"},"Amount:"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"amount",name:"amount",value:s.values.amount,onChange:s.handleChange}),l.a.createElement("br",null),l.a.createElement("label",{for:"receiver"},"Receiver:"),l.a.createElement("br",null),l.a.createElement("select",{id:"receiver",name:"receiver",value:s.values.receiver,onChange:s.handleChange},o.map((function(e){return l.a.createElement("option",{value:e},e)}))),l.a.createElement("br",null),l.a.createElement("label",{for:"method"},"Method:"),l.a.createElement("br",null),l.a.createElement("select",{id:"method",name:"method",value:s.values.method,onChange:s.handleChange},l.a.createElement("option",{value:"Venmo"},"Venmo"),l.a.createElement("option",{value:"Cash"},"Cash"),l.a.createElement("option",{value:"Paypal"},"Paypal")))),l.a.createElement(v.a.Footer,null,c?l.a.createElement(p.a,{animation:"border"}):l.a.createElement(b.a,{variant:"primary",type:"submit",onClick:s.handleSubmit},"Add Transaction"))):l.a.createElement("div",null)}var T=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).pullData=function(){E.a.get("/api/transactions",{params:{room:localStorage.getItem("room"),password:localStorage.getItem("password")}}).then((function(e){console.log("Transactions:"),console.log(e.data),n.setState({payments:e.data.transactions})}))},n.handleCloseAddPaymentModal=function(){n.setState({showAddPaymentModal:!1}),window.location.reload()},n.handleShowAddPaymentModal=function(){n.setState({showAddPaymentModal:!0})},n.handleAddPayment=function(){n.setState({showAddPaymentModal:!1})},n.state={payments:null,showAddPaymentModal:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.pullData()}},{key:"render",value:function(){var e=[];return Object.keys(this.props.roomData.members).forEach((function(t){e.includes(t)||e.push(t)})),console.log("MEMBERS"),console.log(e),l.a.createElement("div",null,l.a.createElement(I,{show:this.state.showAddPaymentModal,onHide:this.handleCloseAddPaymentModal,members:e}),l.a.createElement(d.a,{style:{width:"32rem"}},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,"Payments"),this.state.payments?l.a.createElement("div",null,l.a.createElement(b.a,{onClick:this.handleShowAddPaymentModal},"Add New"),l.a.createElement("div",{style:{overflow:"scroll"}},l.a.createElement(u.a,{bordered:!0,hover:!0,style:{marginTop:"1rem"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"Payer"),l.a.createElement("th",null,"Receiver"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Method"))),l.a.createElement("tbody",null,this.state.payments.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,y()(e.timestamp).format("l")),l.a.createElement("td",null,e.payer),l.a.createElement("td",null,e.receiver),l.a.createElement("td",null,"$",e.amount.toFixed(2)),l.a.createElement("td",null,e.method))})))))):l.a.createElement(p.a,{animation:"border"}))))}}]),a}(l.a.Component),j=a(68),M=a(24),O=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){E.a.get("/api/rooms/"+n.state.room,{params:{password:n.state.password}}).then((function(e){localStorage.setItem("room",n.state.room),localStorage.setItem("password",n.state.password),window.location.reload()})).catch((function(e){console.log(e)}))},n.handleChange=function(e){console.log(e);var t=e.target.id,a=e.target.value;n.setState(Object(j.a)({},t,a))},n.handleKeyPress=function(e){13===e.charCode&&n.handleSubmit()},n.state={room:"",password:""},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{padding:"8rem"}},l.a.createElement("h1",null,"Room Login"),l.a.createElement(M.a,null,l.a.createElement(M.a.Group,{controlId:"room"},l.a.createElement(M.a.Label,null,"Room Name"),l.a.createElement(M.a.Control,{placeholder:"Room Name",onChange:this.handleChange})),l.a.createElement(M.a.Group,{controlId:"password"},l.a.createElement(M.a.Label,null,"Password"),l.a.createElement(M.a.Control,{type:"password",placeholder:"Password",onChange:this.handleChange,onKeyPress:this.handleKeyPress})),l.a.createElement(b.a,{variant:"primary",onClick:this.handleSubmit},"Submit")))}}]),a}(l.a.Component),D=a(111),A=a(112),k=a(69),P=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={roomData:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;null!=localStorage.getItem("room")&&null!=localStorage.getItem("password")&&E.a.get("/api/rooms/"+localStorage.getItem("room"),{params:{password:localStorage.getItem("password")}}).then((function(t){console.log(t.data),e.setState({roomData:t.data})}))}},{key:"render",value:function(){var e=localStorage.getItem("room"),t=localStorage.getItem("password");return null==e||null==t?l.a.createElement(O,null):null==this.state.roomData?l.a.createElement(p.a,{animation:"border"}):l.a.createElement("div",{style:{padding:"2rem"}},l.a.createElement(D.a,{style:{maxWidth:"100%"}},l.a.createElement(A.a,null,l.a.createElement(k.a,null,l.a.createElement(f,{roomData:this.state.roomData})),l.a.createElement(k.a,null,l.a.createElement(S,{roomData:this.state.roomData})),l.a.createElement(k.a,null,l.a.createElement(T,{roomData:this.state.roomData})))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(40),x=a(71),R={posts:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return e},F=Object(B.b)(H);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x.a,{store:F},l.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(108)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.54924550.chunk.js.map