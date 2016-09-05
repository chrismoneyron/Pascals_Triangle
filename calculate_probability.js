function calculate_probability(row, element1, element2, condition) {
	var sum = sumElements(row);

	for (i = 0; i < row.length; i++) {
		row[i] = row[i] / sum;
	}

	if (condition == "and") {
		prob = row[element1] * row[element2];
	}
	else if (condition == "or") {
		prob = row[element1] + row[element2];
	}
	else {
		prob = row[element1];
	}

	return prob;
}