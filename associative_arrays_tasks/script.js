// task 1
var man = {
	"name" : "Alex",
	"age" : "33",
	"id" : "5252352",
	"sex" : "male"
};
// console.log(man);
// console.log(man.name);
// task 2
var man2 = {
	"name" : "Alex",
	"age" : "33",
	"id" : "5252352",
	"sex" : "male",
	"year" : function () {
		return 2018- this.age;
	}
};
// console.log (man2.year() );
// task 3
var m = {
	"mas" : [5, 6, 34, 12, 45],
	"sum" : function () {
		var sum = 0;
		for (var i=0; i<this.mas.length; i++) {
			sum += this.mas[i];
		}
		return sum;
	}
}
// console.log(m.sum());
// task 4
