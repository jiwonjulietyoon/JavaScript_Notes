## let vs const vs var



Var:

- Not affected by scope

Const/let

- Can stand independent in each scope
  - e.g) a const variable defined within an if statement is different/separate from a const variable (of the same name) defined outside the if statement 







null vs undefined



Null: non-existent

undefined: value exists, but is not defined yet









Switch



const device = 'iphone'



Switch (device) {

​	case 'iphone':

​		console.log("iphone");

​		break;

​	case '...':

​		...

​		break;

​	...

​	default:

​		...

}

break를 넣지 않으면 그 다음 코드까지 실행해버린다.







//