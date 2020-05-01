const c_boiler_plate = `
#include <stdio.h>

int main() {
	//code
	return 0;
}
`;
const cpp_boiler_plate = `
#include <iostream>
using namespace std;

int main() {
	cout<<"DS Algo Visualizer!";
	return 0;
}
`;
const java_boiler_plate = `
/*package whatever //do not write package name here */

import java.io.*;

class GFG {
	public static void main (String[] args) {
		System.out.println("DS Algo Visualizer!");
	}
}
`;
const python_boiler_plate = `
#code
print("DS Algo Visualizer!")
`;

module.exports = {
    c_boiler_plate,
    cpp_boiler_plate,
    java_boiler_plate,
    python_boiler_plate,
}
