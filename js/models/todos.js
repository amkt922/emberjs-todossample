App.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

App.Todo.FIXTURES = [
{
	id: 1,
	title: 'first todo',
	isCompleted: true
},
{
	id: 2,
	title: 'second todo',
	isCompleted: false 
},
{
	id: 3,
	title: 'third todo',
	isCompleted: false 
}
];
