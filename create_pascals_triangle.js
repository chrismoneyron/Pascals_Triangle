function create_pascals_triangle(depth) {
	var index = 1;

	if (depth == 0) {
		row_array = [1];
		new_row_array = row_array.slice();
	}
	else {
		create_pascals_triangle(depth - 1);
		
		while (index < depth) {
			new_row_array[index] = row_array[index - 1] + row_array[index];
			index++;
		}

		new_row_array[row_array.length] = 1;
		row_array = new_row_array.slice();
		index = 0;
	}

	return row_array;
}