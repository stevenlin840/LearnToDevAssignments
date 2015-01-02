/*
 * taken from http://www.cplusplus.com/forum/articles/12974/
 * Requires:
 * variables, data types, and numerical operators
 * basic input/output
 * logic (if statements, switch statements)
 * 
 * Write a program that allows the user to enter the grade scored in a programming class (0-100).
 * If the user scored a 100 then notify the user that they got a perfect score.
 * Bonus:
 *   Modify the program so that if the user scored a 90-100 it informs the user that they scored an A
 *   Modify the program so that it will notify the user of their letter grade. 0-59 F 60-69 D 70-79 C 80-89 B 90-100 A
 */

function grade(x) { //perfect score x=100;
	if (x == 100) {
		console.log("pecfect score");
	}
	else if (x > 89 && x < 100) {
		console.log("A");
	} 
	else if (x > 79 && x < 90) {
		console.log("B");
	} 
	else if (x > 69 && x < 80) {
		console.log("C");
	}
	else if (x > 59 && x < 70) {
		console.log("D");
	}
	else if (x >= 0 && x < 60) {
		console.log("F");
	}
}
grade(100);
grade(95);
grade(88);
grade(74);
grade(66);
grade(51);