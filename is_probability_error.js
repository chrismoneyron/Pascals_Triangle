function is_probability_error(condition, element1, element2, depth) {
	if (condition == "and") {
		if (isNaN(element1) || element1 == "" || isNaN(element2) || element2 == "") {
			alert("Invalid input(s)");
			return true;
		}
	}
	else if (condition == "or") {
		if (isNaN(element1) || element1 == "" || isNaN(element2) || element2 == "") {
			alert("Invalid input(s)");
			return true;
		}
	}
	else if (condition == "none") {
		if (isNaN(element1) || element1 == "" || (element1 != "" && element2 != "")) {
			alert("Please enter the single value in the box for element 1 in order to perform this type of probability calculation");
			return true;
		}
	}
	else {
		alert("Please choose a type of probability calculation");
		return true;
	}

	if (isNaN(depth) || depth == "") {
		alert("Please enter a valid depth");
		return true;
	}

	if (element1 > depth || element2 > depth) {
		alert("No such element. Depth must be greater than or equal to the index");
		return true;
	}

	return false;
}