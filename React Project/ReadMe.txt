node -v : Should be above 14
npx -v : Should be above 6
To create react project:- npx create-react-app demo1[Project name ie demo1 in this should be in lower case]
------------Inside project------------
public--Index.html = home page div id=root is a place where react will be displayed 

npm start ---to start react application 
while giving start we should be in demo1 folder in cmd 
Ctrl+c for exit-- Y
 under src will have app.js has App() this is component
-------------------------------------------------------------Demo2-----------------------------------------
Learned to create function and class component
rsf-->functional component
 function Welcome(props) {
    return (
        <div>
            <h1> Welcome to React Compoent 1</h1>
        </div>
    );
}
The above code is function component

rcc-->class component
class Hello extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

The above code is class component

----------------------Demo 3------------------------------------------
props short cut for properties
return (
        <div>
            <h1>Allowed</h1>
        </div>
    );
return (
        <div>
            
        </div>
        <h1>Not Allowed</h1>
    );

-----function
 <Person name="Shree" age="30"><p>Working at Zensar</p></Person>
 <Person name="Abhi" age="40"> <button>Click</button></Person>

<Employee name="Aisha" grade='A'></Employee>
<Employee name="Bhavya" grade='C'></Employee>

 ------Person.js
 above 51 and 52 should be given in App.js and to call this properties name and age in function we use {props.propertiesName}
 <p>Name of the Person is {props.name}</p>
            <p>And age is {props.age} </p>
            <p>{props.children}</p>

------Employee.js
To call the properties specified in App.js line no 54 & 55 to call them inside class we have to createn 
constructor with paramete "props"
we call using this.props.propertiesName

constructor(props) {
        super(props);
}
 render() {
        return (
            <div>
                <p>{this.props.name}-{this.props.grade}</p>
            </div>
        );
    }

-----------------------Demo 4---------------------------
 clickHandle=()=>{
        alert("Welcome")
    }
inputHandle=(evt)=>{
        console.log(evt.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.inputHandle}></input>// every changes made in textbox will be printed on console in browser
                <input type="text" onChange={this.inputHandle}></input>// every changes made in textbox will be printed on console in browser
                target on 2 textbox will be activated each time when we access it will not be present on 2 text box at a time
                <button onClick={this.clickHandle}>Click</button>
            </div>
        );
    }
This is how we do Event Handling
[Note: Have to call this class in App.js]

constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
this.state is json object

clickHandle=()=>{
        this.setState(
            {
                count:this.state.count+1;
            }
        )
    }
this.setState is used to change the state of object
above code by clicking increment button count have to increse
-------------------------Demo 5--------------------------------
constructor(props) {
        super(props);
        this.state={
            id:0,
            name:"",
            salary:0.0
        } 
    }
    handle1=(evt)=>{
        this.setState({
            id:evt.target.value 
        })
    }
    handle2=(evt)=>{
        this.setState({
            name:evt.target.value
        })
    }
    handle3=(evt)=>{
        this.setState({
            salary:evt.target.value
        })
    }
    handle4=(evt)=>{
        evt.preventDefault();
    }

            <div>
               <table cellPadding={5} >
                   <tr>
                        <td>Id</td>
                        <td>{this.state.id}</td>
                   </tr>
                   <tr>
                        <td>Name</td>
                        <td>{this.state.name}</td>
                   </tr>
                   <tr>
                        <td>Salary</td>
                        <td>{this.state.salary}</td>
                   </tr>
               </table>
               <form onSubmit={this.handle4}>
                   <label>Id </label>
                   <input type="text" onChange={this.handle1}></input>
                   <br></br>
                   <label>Name </label>
                   <input type="text" onChange={this.handle2}></input>
                   <br></br>
                   <label>Salary </label>
                    <input type="text" onChange={this.handle3}  value={this.state.salary}></input>--This is used to change value both in text and table
                   <br></br>
                   <button>Submit</button>
               </form>
            </div>

constructor with elements are madatory for making onChange event to happen
handle4 function is used to privent the form from submitting(Refresh by default)
by default button will be of submit type if you waant as button we have to specify 
        -type="button"
---------------------------Demo 6--------------------
function Example1(props) {
    let headStyle={
        padding:"20px",
        backgroundColor:"blue",
        color:"gold"
    }
    return (
        <div>
            <h1 style={headStyle}>Example 1</h1>
            <p style={{backgroundColor:"Lightgreen",color:"black",padding:"50px"}}>This is inline styling.
            Up until verion 1.0.0 all the JavaScript snippets where part of the extension. In order to avoid duplication the snippets are now included only to this extension and if you want to use them you have to install it explicitly.
            </p>
        </div>
    );
}

in the above code line 187 is internal css the 
    -code for internal css is from 180 to 183
    -for internal css style={styleName}

Inline css is done in line no 188
for inline css we have to give style={{}}




